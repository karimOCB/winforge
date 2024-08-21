import { IconBezier } from "@/components/icons/icon-bezier";
import { IconEarth } from "@/components/icons/icon-earth";
import { IconFilm } from "@/components/icons/icon-film";
import { IconWeb } from "@/components/icons/icon-web";
import { Tabs } from "@/components/ui/tabs";
import ServiceCard from "./service-card";
import React from "react";

const Title = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <div className="flex items-center gap-x-2 whitespace-nowrap">
    {icon}
    {title}
  </div>
);

const tabs = [
  {
    title: <Title title="Diseño y Estrategia" icon={<IconBezier />} />,
    icon: <IconBezier />,
    titleOnly: "Diseño",
    value: "design-and-strategy",
    content: (
      <ServiceCard
        service={{
          title: "Desarrollo de Identidad Visual y Comunicativa",
          bold1: "Manual de Marca",
          text1:
            "Logo, Isologo, Isotipo, Naming, Branding, Paleta de Colores Institucionales, Tipografías",
          bold2: "Espíritu e Identidad",
          text2: "Misión, Visión, Valores, Voz y Tono",
          footer: ["Landing Page", "Eventos", "Diseño Editorial"],
        }}
      />
    ),
  },
  {
    title: <Title title="Desarrollo de Software" icon={<IconWeb />} />,
    icon: <IconWeb />,
    titleOnly: "Desarrollo",
    value: "development-web",
    content: (
      <ServiceCard
        service={{
          title: "Desarrollo de Software",
          bold1: "Plataformas Web y Tiendas Online",
          text1:
            "Creación, Diseño y Desarrollo a Medida. Interactivo, Innovador y Responsive.",
          bold2: "Gestión de Proyectos IT",
          text2:
            "Aplicaciones que permiten a las empresas integrar, automatizar y gestionar sus procesos de manera eficiente y centralizada.",
          footer: [],
        }}
      />
    ),
  },
  {
    title: <Title title="Gestión" icon={<IconEarth />} />,
    icon: <IconEarth />,
    titleOnly: "Gestión",
    value: "playground",
    content: (
      <ServiceCard
        service={{
          title: "Gestión Multimedia",
          bold1: "Planificación de Contenido en RR.SS.",
          text1:
            "Instagram, YouTube, TikTok, Facebook, LinkedIn, Twitter, Mail",
          bold2: "Posicionamiento Diferenciado",
          text2:
            "Optimización SEO, Estética Integral, Marketing Digital, Análisis estratégico de métricas y tendencias.",
          footer: [],
        }}
      />
    ),
  },
  {
    title: <Title title="Producción" icon={<IconFilm />} />,
    icon: <IconFilm />,
    titleOnly: "Producción",
    value: "content",
    content: (
      <ServiceCard
        service={{
          title: "Producción de Contenido Audiovisual",
          bold1: "Brainstorming y Guionización",
          text1:
            "Trabajamos con el cliente para generar ideas y crear contenido acorde a lo que necesiten.",
          bold2: "Grabación y Edición de Calidad",
          text2:
            "Con Softwares avanzados, generamos un producto final profesional y de gran impacto.",
          footer: ["Videos Institucionales", "Reels", "Imágenes"],
        }}
      />
    ),
  },
];

export function TabsDemo() {
  return (
    <div className="relative mb-[36rem] flex h-full w-full flex-col px-0 [perspective:1000px] lg:mb-0 lg:flex-row">
      <Tabs tabs={tabs} />
    </div>
  );
}


{
  /*
  const tabs = [
  {
    title: <Title title="Diseño y Estrategia" icon={<IconBezier />} />,
    icon: <IconBezier />,
    titleOnly: "Diseño",
    value: "design-and-strategy",
    content: (
      <ServiceCard
        service={{
          title: "Desarrollo de Identidada visual y Comunicativa",
          bold1: "Manual de Marca",
          text1a: "Logo, Isologo, Isotipo, Naming, Branding",
          text1b: "Paleta de Colores Institucionales, Tipografías",
          bold2: "Diseño de la Identidad",
          text2a: "Misión y Visión",
          text2b: "Valores, Voz y Tono",
          footer: ["Landing Page", "Eventos", "Diseño Editorial"],
        }}
      />
    ),
  },
  {
    title: <Title title="Desarrollo de Software" icon={<IconWeb />} />,
    icon: <IconWeb />,
    titleOnly: "Desarrollo",
    value: "development-web",
    content: (
      <ServiceCard
        service={{
          title: "Desarrollo de Software",
          bold1: "Plataformas Web y Tiendas Online",
          text1a:,
          text1b:,
            "Creación, Diseño y Desarrollo a Medida. Interactivo, Innovador y Responsive.",
          bold2: "Gestión de Proyectos IT",
          text2a:
            "Aplicaciones que permiten a las empresas integrar, automatizar y gestionar sus procesos de manera eficiente y centralizada.",
          text2b: 
            footer: [],
        }}
      />
    ),
  },
  {
    title: <Title title="Gestión" icon={<IconEarth />} />,
    icon: <IconEarth />,
    titleOnly: "Gestión",
    value: "playground",
    content: (
      <ServiceCard
        service={{
          title: "Gestión multimedia",
          bold1: "Planificación de Contenido en RRSS",
          text1a:
            "Instagram, Youtube, Tik Tok, Facebook,  Linkedin, Twitter, Mail",
          text1b:,
          bold2: "Posicionamiento adecuado",
          text2a:
            "Optimización SEO, Estetica Integral, Marketing Digital, Análisis estratégico de métricas y tendencias.",
          text2b:,
          footer: [],
        }}
      />
    ),
  },
  {
    title: <Title title="Producción" icon={<IconFilm />} />,
    icon: <IconFilm />,
    titleOnly: "Producción",
    value: "content",
    content: (
      <ServiceCard
        service={{
          title: "Producción de contenido audiovisual",
          bold1: "Brainstorming y Guionización",
          text1a:
            "Trabajamos con el cliente para generar ideas y crear contendio acorde a lo que necesiten.",
          text1b:,
          bold2: "Grabación y Edición de Calidad",
          text2a:
            "Con Softwares avanzados generamos un producto final profesional y de gran impacto.",
          text2b:,
          footer: ["Videos Institucionales", "Reels", "Imágenes"],
        }}
      />
    ),
  },
];
  */
}

{
  /*
  const tabs = [
  {
    title: <Title title="Diseño y Estrategia" icon={<IconBezier />} />,
    icon: <IconBezier />,
    titleOnly: "Diseño",
    value: "design-and-strategy",
    content: (
      <ServiceCard
        service={{
          title: "Desarrollo de Identidada visual y Comunicativa",
          bold1: "Manual de Marca",
          text1a: "Logo, Isologo, Isotipo, Naming, Branding",
          text1b: "Paleta de Colores Institucionales, Tipografías",
          bold2: "Diseño de la Identidad",
          text2a: "Misión y Visión",
          text2b: "Valores, Voz y Tono",
          footer: ["Landing Page", "Eventos", "Diseño Editorial"],
        }}
      />
    ),
  },
  {
    title: <Title title="Desarrollo de Software" icon={<IconWeb />} />,
    icon: <IconWeb />,
    titleOnly: "Desarrollo",
    value: "development-web",
    content: (
      <ServiceCard
        service={{
          title: "Desarrollo de Software",
          bold1: "Plataformas Web y Tiendas Online",
          text1a:,
          text1b:,
            "Creación, Diseño y Desarrollo a Medida. Interactivo, Innovador y Responsive.",
          bold2: "Gestión de Proyectos IT",
          text2a:
            "Aplicaciones que permiten a las empresas integrar, automatizar y gestionar sus procesos de manera eficiente y centralizada.",
          text2b: 
            footer: [],
        }}
      />
    ),
  },
  {
    title: <Title title="Gestión" icon={<IconEarth />} />,
    icon: <IconEarth />,
    titleOnly: "Gestión",
    value: "playground",
    content: (
      <ServiceCard
        service={{
          title: "Gestión multimedia",
          bold1: "Planificación de Contenido en RRSS",
          text1a:
            "Instagram, Youtube, Tik Tok, Facebook,  Linkedin, Twitter, Mail",
          text1b:,
          bold2: "Posicionamiento adecuado",
          text2a:
            "Optimización SEO, Estetica Integral, Marketing Digital, Análisis estratégico de métricas y tendencias.",
          text2b:,
          footer: [],
        }}
      />
    ),
  },
  {
    title: <Title title="Producción" icon={<IconFilm />} />,
    icon: <IconFilm />,
    titleOnly: "Producción",
    value: "content",
    content: (
      <ServiceCard
        service={{
          title: "Producción de contenido audiovisual",
          bold1: "Brainstorming y Guionización",
          text1a:
            "Trabajamos con el cliente para generar ideas y crear contendio acorde a lo que necesiten.",
          text1b:,
          bold2: "Grabación y Edición de Calidad",
          text2a:
            "Con Softwares avanzados generamos un producto final profesional y de gran impacto.",
          text2b:,
          footer: ["Videos Institucionales", "Reels", "Imágenes"],
        }}
      />
    ),
  },
];
  */
}