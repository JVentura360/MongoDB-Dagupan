const mongoose = require('mongoose');
const connectDB = require('./db');
connectDB();

const dimensionSchema = new mongoose.Schema({
width: Number,
height: Number,
depth: Number,
unit: {
type: String,
default: 'cm'
}
});

const productSchema = new mongoose.Schema({
name: {
type: String,
required: true
},
price: {
type: Number,
required: true,
min: 0
},
description: String,
category: {
type: String,
default: 'General'
},
createdAt: {
type: Date,
default: Date.now
},
isAvailable: {
type: Boolean,
default: true
},
dimensions: dimensionSchema // Embed the dimensionSchema
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

const createProduct = async () => {
try {
const product = new Product({
name: 'Laptop',
price: 1200,
description: 'A high-performance laptop',
dimensions: {
width: 30,
height: 20,
depth: 2
}
});

await product.save();
console.log('Product saved successfully:', product);
} catch (error) {
console.error('Error saving product:', error);
console.error('Validation Error:', error.errors);
}
};

createProduct();