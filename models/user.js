const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    // userName is automatically created by the passport local mongoose and
    // hash and salt is added automatically too, we need not to define it separately
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);