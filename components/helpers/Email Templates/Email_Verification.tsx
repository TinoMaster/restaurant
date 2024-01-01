interface EmailTemplateProps {
  firstName: string;
  verificationCode: string;
}

export const EmailVerification: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  verificationCode,
}) => (
  <section className="font-sans bg-gray-100 p-4">
    <h1>Welcome, {firstName}!</h1>

    <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md">
      <h2 className="text-2xl font-bold text-blue-500 mb-4">
        ¡Bienvenido a Nuestra Plataforma!
      </h2>

      <p className="mb-4">
        Gracias por registrarte en nuestro servicio. Para completar tu registro,
        por favor haz clic en el siguiente enlace:
      </p>

      {/* <!-- Reemplaza 'URL_DEL_SERVIDOR' con la URL real de tu servidor de verificación --> */}
      <p className="mb-4">Codigo: {verificationCode}</p>

      <p className="mb-4">
        Si no has realizado este registro, puedes ignorar este correo.
      </p>

      <p className="mb-4">
        Gracias,
        <br />
        Tu Equipo
      </p>
    </div>
  </section>
);
