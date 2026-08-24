import BuscadorProductos from "@/components/BuscadorProductos";

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

export default function ProductosPage() {
  return (
    <main className="min-h-screen bg-pink-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-pink-600">
          Productos GlowCare
        </h1>

        <p className="mt-3 text-gray-600">
          Explora productos y descubre opciones para tu rutina de skincare.
        </p>

        <div className="mt-8">
          <BuscadorProductos productos={productos} />
        </div>
      </div>
    </main>
  );
}