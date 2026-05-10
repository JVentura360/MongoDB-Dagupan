const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/aggregationDB")
.then(() => console.log("MongoDB Connected Successfully"))
.catch(err => console.log("Connection Error:", err));

const salesSchema = new mongoose.Schema({
    productName: String,
    category: String,
    price: Number,
    quantity: Number
});

const Sale = mongoose.model("Sale", salesSchema);

async function seedData() {
    await Sale.deleteMany(); // clear old data

    await Sale.insertMany([
        { productName: "Laptop", category: "Electronics", price: 1000, quantity: 2 },
        { productName: "Phone", category: "Electronics", price: 500, quantity: 5 },
        { productName: "Shirt", category: "Clothing", price: 30, quantity: 10 },
        { productName: "Shoes", category: "Clothing", price: 80, quantity: 4 },
        { productName: "TV", category: "Electronics", price: 800, quantity: 1 },
        { productName: "Watch", category: "Accessories", price: 200, quantity: 3 }
    ]);

    console.log("Sample Data Inserted");
}

async function basicAggregation() {
    console.log("\n--- BASIC AGGREGATION ---");

    const result = await Sale.aggregate([
        {
            $match: { category: "Electronics" }
        },
        {
            $group: {
                _id: "$category",
                totalProducts: { $sum: 1 },
                totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } }
            }
        }
    ]);

    console.log(result);
}

async function advancedAggregation() {
    console.log("\n--- ADVANCED AGGREGATION ---");

    const result = await Sale.aggregate([
        {
            $project: {
                productName: 1,
                category: 1,
                totalAmount: { $multiply: ["$price", "$quantity"] }
            }
        },
        {
            $sort: { totalAmount: -1 }
        }
    ]);

    console.log(result);
}

async function fullPipeline() {
    console.log("\n--- FULL PIPELINE ---");

    const result = await Sale.aggregate([
        {
            $match: { category: "Electronics" }
        },
        {
            $group: {
                _id: "$category",
                totalRevenue: {
                    $sum: { $multiply: ["$price", "$quantity"] }
                }
            }
        },
        {
            $project: {
                _id: 0,
                category: "$_id",
                totalRevenue: 1
            }
        },
        {
            $sort: { totalRevenue: -1 }
        }
    ]);

    console.log(result);
}

async function runApp() {
    await seedData();
    await basicAggregation();
    await advancedAggregation();
    await fullPipeline();

    mongoose.connection.close();
}

runApp();