export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/profile"],
  secret: process.env.NEXTAUTH_SECRET,
};
