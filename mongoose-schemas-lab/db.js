const mongoose = require('mongoose');
const connectDB = async () => {
try {
await mongoose.connect('mongodb+srv://jonel:ventura@cluster0.cktujo7.mongodb.net/?appName=Cluster0', {
useNewUrlParser: true,
useUnifiedTopology: true,
});
console.log('MongoDB connected successfully');
} catch (error) {
console.error('MongoDB connection error:', error);
process.exit(1); 
}
};

module.exports = connectDB;