const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    permission: { type: String, required: true },
}, {
    timestamps: true,
})

const UserInfo = mongoose.model('userInfo', userInfoSchema);

module.exports = UserInfo;