"use client";

import { useState, JSX, SVGProps } from "react";

const images = [
  {
    src: "/Imagen1.jpeg",
    title: "Desvararse",
    description: "Una pieza que explora la fluidez de la forma.",
  },
  {
    src: "/Imagen2.jpeg",
    title: "Corroerse",
    description: "Una pieza que explora la geometría de la forma.",
  },
  {
    src: "/Imagen3.jpeg",
    title: "Encajarse",
    description: "Una pieza que explora la abstracción de la forma.",
  },
  {
    src: "/Imagen4.jpeg",
    title: "Repararse",
    description: "Una pieza que explora la abstracción de la forma.",
  },
  {
    src: "/Imagen5.jpeg",
    title: "Modificarse",
    description: "Una pieza que explora la abstracción de la forma.",
  },
];

export default function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-heading font-bold">¿Cuánto (cuándo) se debe cambiar?</h1>
          <small className="mt-2">Maria Paula Roa Ramirez</small>
        </div>
      </header>
      <div className="flex-grow w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
        <div className="relative aspect-[2.5/3] overflow-hidden rounded-lg">
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
          >
            <ChevronLeftIcon className="w-6 h-6 text-primary-foreground" />
          </button>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
            width={1600}
            height={1200}
            className="object-cover w-full h-full"
          />
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 p-2 rounded-full hover:bg-primary-foreground/20 transition-colors"
          >
            <ChevronRightIcon className="w-6 h-6 text-primary-foreground" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-background/80 p-4">
            <h3 className="text-lg font-semibold">{images[currentIndex].title}</h3>
          </div>
        </div>
        <div className="space-y-6">
          <div className="text-center md:text-left">
            {/* <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Escultura Contemporánea</h2> */}
            <p className="font-body mt-3 max-w-2xl text-xl text-muted-foreground">
              Soy un cuerpo cambiante, soy aquello que no se puede nombrar y aquello que no existe si no se nombra. Todo es cambio. Todo es reinventarse. ¿Cómo se cuando debo parar? ¿Cómo se cuánto debo cambiar? ¿Cómo se cuando ya no hay cambio posible? En una ciudad como Bogotá el cambio también es una parte fundamental como lo es para cada uno de sus habitantes, tal vez aquel cambio sea el deterioro al tiempo, el remplazar objetos por nuevo o por reinventados. Pero se cambia. Aquella frase de todo cambia, hace parte de mis más íntimas sesiones de terapia en donde debo encontrar refugio en entender que nada de lo que vivo, siento, veo o percibo es fijo. ¿Es el cambio la esencia del ser humano o es el cambio la pérdida de este?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
