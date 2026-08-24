interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
}

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Limpiador Facial",
    categoria: "Limpieza",
    descripcion:
      "Limpiador suave para complementar la rutina diaria de cuidado facial.",
  },
  {
    id: 2,
    nombre: "Sérum de Vitamina C",
    categoria: "Tratamiento",
    descripcion:
      "Sérum que complementa la rutina de cuidado facial y aporta una opción de tratamiento.",
  },
  {
    id: 3,
    nombre: "Protector Solar",
    categoria: "Protección",
    descripcion:
      "Producto pensado para complementar la protección de la piel durante el día.",
  },
];

interface ProductoDetalleProps {
  params: {
    id: string;
  };
}

export default function ProductoDetalle({
  params,
}: ProductoDetalleProps) {
  const producto = productos.find(
    (item) => item.id === Number(params.id)
  );

  if (!producto) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-pink-50 px-6">
        <div className="rounded-xl bg-white p-8 text-center shadow-md">

          <h1 className="text-2xl font-bold text-gray-800">
            Producto no encontrado
          </h1>

          <p className="mt-3 text-gray-600">
            El producto que buscas no existe.
          </p>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-pink-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">

        <div className="rounded-2xl bg-white p-8 shadow-md">

          <p className="text-sm font-semibold text-pink-600">
            {producto.categoria}
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-800">
            {producto.nombre}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            {producto.descripcion}
          </p>

          <a
            href="/productos"
            className="mt-8 inline-block rounded-lg bg-pink-600 px-5 py-3 font-semibold text-white hover:bg-pink-700"
          >
            Volver a productos
          </a>

        </div>

      </div>
    </main>
  );
}