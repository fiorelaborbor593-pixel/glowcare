import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold text-pink-600"
        >
          GlowCare
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-pink-600"
          >
            Inicio
          </Link>

          <Link
            href="/productos"
            className="text-gray-700 hover:text-pink-600"
          >
            Productos
          </Link>

          <Link
            href="/login"
            className="text-gray-700 hover:text-pink-600"
          >
            Iniciar sesión
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-pink-600 px-4 py-2 text-white hover:bg-pink-700"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
}