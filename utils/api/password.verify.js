import bcrypt from "bcrypt";

export const verifyPassword = async (pass, hash) => {
  const isMatch = await bcrypt.compare(pass, hash);
  return isMatch;
};
