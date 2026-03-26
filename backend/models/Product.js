const mongoose = require('mongoose');
// Product schema defining the structure of product documents in MongoDB
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  flavor: { type: String },
  category: { type: String },
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  inStock: { type: Boolean, default: true },
  image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
