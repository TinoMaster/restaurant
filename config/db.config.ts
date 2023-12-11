export const db_config = {
  host: process.env.MONGO_HOST,
  database: process.env.MONGO_DB,
  URI: `${process.env.MONGO_HOST}/${process.env.MONGO_DB}`,
};
