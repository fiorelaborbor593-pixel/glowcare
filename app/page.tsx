export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold text-pink-600">
          GlowCare
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Tu espacio para descubrir productos de skincare,
          conocer sus ingredientes y compartir recomendaciones.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white hover:bg-pink-700">
            Explorar productos
          </button>

          <button className="rounded-lg border border-pink-600 px-6 py-3 font-semibold text-pink-600 hover:bg-pink-100">
            Iniciar sesión
          </button>
        </div>
      </section>
    </main>
  );
}