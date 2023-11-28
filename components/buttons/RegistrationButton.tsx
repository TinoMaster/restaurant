import Link from "next/link";

export const RegistrationButton = () => {
  return (
    <Link
      href={"/register"}
      className="bg-primaryGradient hover-primary-gradient px-3 py-1 rounded-md"
    >
      Registrarse
    </Link>
  );
};
