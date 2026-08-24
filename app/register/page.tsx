export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-pink-50 px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md">
        <h1 className="text-center text-3xl font-bold text-pink-600">
          Crear cuenta
        </h1>

        <p className="mt-2 text-center text-gray-600">
          Únete a la comunidad GlowCare
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-medium text-gray-700"
            >
              Nombre
            </label>

            <input
              id="name"
              type="text"
              placeholder="Tu nombre"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-medium text-gray-700"
            >
              Correo electrónico
            </label>

            <input
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block font-medium text-gray-700"
            >
              Contraseña
            </label>

            <input
              id="password"
              type="password"
              placeholder="********"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-pink-600 py-3 font-semibold text-white hover:bg-pink-700"
          >
            Crear cuenta
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          ¿Ya tienes una cuenta?{" "}
          <a
            href="/login"
            className="font-semibold text-pink-600 hover:underline"
          >
            Inicia sesión
          </a>
        </p>
      </div>
    </main>
  );
}