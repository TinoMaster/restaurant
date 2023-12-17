import { UserModel } from "@/app/models/User";
import { db_config } from "@/config/db.config";
import { nextAuthConfig } from "@/config/nextAuth.config";
import clientPromise from "@/lib/mongodb";
import { verifyPassword } from "@/utils/api/password.verify";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import mongoose from "mongoose";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const nextOptions = {
  adapter: MongoDBAdapter(clientPromise!),
  secret: nextAuthConfig.secret,
  pages: {
    signIn: "/login",
    signOut: "/",
  },
  providers: [
    GoogleProvider({
      clientId: nextAuthConfig.google_id || "",
      clientSecret: nextAuthConfig.google_secret || "",
    }),
    CredentialsProvider({
      name: "Credentials",
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

          mongoose.connect(`${db_config.host}/${db_config.database}`);
          const user = await UserModel.findOne({ email });

          if (user && (await verifyPassword(password, user.password))) {
            return user;
          }
        }

        return null;
      },
    }),
  ],
};

const handler = NextAuth(nextOptions);

export { handler as GET, handler as POST };
