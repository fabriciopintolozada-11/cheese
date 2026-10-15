const quesos = [
  {
    nombre: "Gouda",
    origen: "Países Bajos",
    descripcion: "Suave, cremoso y con un dulzor que se intensifica con la maduración.",
  },
  {
    nombre: "Parmesano",
    origen: "Italia",
    descripcion: "Curado durante meses, de textura granulosa y sabor profundo.",
  },
  {
    nombre: "Camembert",
    origen: "Francia",
    descripcion: "Corteza blanca aterciopelada y un interior fundente.",
  },
  {
    nombre: "Manchego",
    origen: "España",
    descripcion: "De leche de oveja, firme y con un toque ligeramente picante.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <span className="text-xl font-bold">🧀 Cheese</span>
        <a href="#contacto" className="text-sm font-medium hover:text-accent">
          Contacto
        </a>
      </header>

      <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center">
        <span className="text-7xl" aria-hidden="true">
          🧀
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          El mundo del queso, en un solo lugar
        </h1>
        <p className="max-w-xl text-lg text-muted">
          Descubre quesos artesanales de todo el mundo, seleccionados para
          acompañar cada momento.
        </p>
        <a
          href="#quesos"
          className="rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:opacity-90"
        >
          Ver quesos
        </a>
      </section>

      <section id="quesos" className="bg-surface py-20">
        <div className="mx-auto w-full max-w-5xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Nuestros favoritos
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quesos.map((queso) => (
              <article
                key={queso.nombre}
                className="rounded-2xl bg-background p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{queso.nombre}</h3>
                <p className="mb-3 text-sm font-medium text-accent">
                  {queso.origen}
                </p>
                <p className="text-sm text-muted">{queso.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 py-20 text-center"
      >
        <h2 className="text-3xl font-bold">¿Te gusta el queso?</h2>
        <p className="max-w-md text-muted">
          Escríbenos y te contamos más sobre nuestra selección.
        </p>
        <a
          href="mailto:hola@cheese.com"
          className="rounded-full border-2 border-accent px-6 py-3 font-semibold text-accent transition hover:bg-accent hover:text-accent-foreground"
        >
          hola@cheese.com
        </a>
      </section>

      <footer className="mt-auto py-6 text-center text-sm text-muted">
        © {new Date().getFullYear()} Cheese
      </footer>
    </main>
  );
}
