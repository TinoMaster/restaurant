const {
  ACCESS_KEY_CUBBIT_ID,
  SECRET_ACCESS_KEY_CUBBIT,
  BUCKECT_NAME,
  BUCKECT_NAME_CUBBIT_KEY,
} = process.env;

export const cubbitConfig = {
  bucketName: BUCKECT_NAME,
  bucketNameKey: BUCKECT_NAME_CUBBIT_KEY,
  accessKeyId: ACCESS_KEY_CUBBIT_ID,
  secretAccessKey: SECRET_ACCESS_KEY_CUBBIT,
};
