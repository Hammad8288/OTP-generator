"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateOTP() {
    const otpLength = 4;
    let otp = "";
    for (let i = 1; i <= otpLength; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
}
const otp = generateOTP();
console.log('Your OTP is:', otp);
