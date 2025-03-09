import 'dotenv/config';
import * as process from "node:process";

export type Config = {
    PORT: string;
    DATABASE_URL: string;
    NODE_ENV: string;
}

const {
    PORT,
    DATABASE_URL,
    NODE_ENV
} = process.env;

const config = {
    PORT: PORT || '3000',
    DATABASE_URL: DATABASE_URL || '',
    NODE_ENV: NODE_ENV || ''
}

export default config as Config;