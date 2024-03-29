import dotenv from 'dotenv';
dotenv.config();

const SUBMIT_RATE = process.env.SUBMIT_RATE || 60;
const VARIATION = process.env.VARIATION || 10;
const REFERRAL_CODE = process.env.REFERRAL_CODE || '';

export { SUBMIT_RATE, REFERRAL_CODE, VARIATION };
