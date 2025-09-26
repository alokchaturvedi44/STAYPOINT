const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1756814879165-d2eb1606c3c0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
        set: (v) => v === "" 
                ? "https://images.unsplash.com/photo-1756814879165-d2eb1606c3c0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" 
                : v,
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;