import dotenv from 'dotenv';

dotenv.config();
export default {
  homeUrl: `${process.env.APP_URL} : ${process.env.PORT}`,
  port: process.env.PORT,
  ip: process.env.IP,
  databaseUrl: process.env.DATABASE_URL,
};
