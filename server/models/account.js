const mongoose = require('mongoose');
const { Schema } = mongoose;

const AccountSchema = new Schema({
    numberAccount: { type: Number, default: 0 },
    stateAccount: { type: Boolean, default: false },
    valueAccount: { type: Number, default: 0 },
}, {
        versionKey: false,
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

module.exports = mongoose.model('Account', AccountSchema)