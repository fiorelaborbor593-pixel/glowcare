"use client";

import { useState } from "react";

interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
}

interface BuscadorProductosProps {
  productos: Producto[];
}

export default function BuscadorProductos({
  productos,
}: BuscadorProductosProps) {
  const [busqueda, setBusqueda] = useState("");

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <div className="mb-8">
        <label
          htmlFor="busqueda"
          className="mb-2 block font-medium text-gray-700"
        >
          Buscar producto
        </label>

        <input
          id="busqueda"
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Ejemplo: sérum"
          className="w-full rounded-lg border bg-white px-4 py-3 outline-none focus:border-pink-500"
        />
      </div>

      {productosFiltrados.length === 0 ? (
        <p className="rounded-lg bg-white p-6 text-center text-gray-600">
          No encontramos productos con esa búsqueda.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {productosFiltrados.map((producto) => (
            <article
              key={producto.id}
              className="rounded-xl bg-white p-6 shadow-md"
            >
              <h2 className="text-xl font-bold text-gray-800">
                {producto.nombre}
              </h2>

              <p className="mt-2 text-sm font-medium text-pink-600">
                {producto.categoria}
              </p>

              <p className="mt-3 text-gray-600">
                {producto.descripcion}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}