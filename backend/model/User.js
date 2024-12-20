const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
        default: "Student",
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
        default: 0,
    },
    pin: {
        type: String,
        required: true,
    },
    dailyLimit: {
        type: Number,
    },
    availability: {
        type: Boolean,
    },
    transactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Transaction',
        },
    ],
    usedCoupons: [
        {
            type: String,
        }
    ],
    notification: { type: Schema.Types.Mixed, default: null },
    qrcode:{
        type: String, 
    }
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;

// ID(Roll no)
// Name
// Email
// Password
// Pin
// Transactions - 
// Balance
// Daily Limit
// Availability
// Used Coupons - 
// Role
// Notifications