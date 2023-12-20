import { UserModel } from "@/app/models/User";
import { db_config } from "@/config/db.config";
import { nextAuthConfig } from "@/config/nextAuth.config";
import mongoose from "mongoose";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "./api/password.verify";

export const authOptions: AuthOptions = {
  secret: nextAuthConfig.secret,
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "laura@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (credentials) {
          const { email, password } = credentials;

          mongoose.connect(`${db_config.URI}`);
          const user = await UserModel.findOne({ email }).select("+password");

          if (user && (await verifyPassword(password, user.password))) {
            return user;
          } else {
            return null;
          }
        }
      },
    }),
  ],
};
