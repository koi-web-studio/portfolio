"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MainHero } from "@/components/ui/mainhero";
import Vcl from "@/components/ui/Vcl";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <section className="bg-[#F75E01] md:min-h-[600px] flex flex-col">
                <header className="w-full flex py-1 items-center justify-center font-mono text-sm md:flex md:justify-start md:px-20">
                    <a href="/">
                        <picture>
                            <source
                                media="(min-width: 768px)"
                                srcSet="/koi/logoblanco.png"
                                width={100}
                            />
                            <source
                                media="(min-width: 400px)"
                                srcSet="/koi/logotipo-blanco.png"
                                width={80}
                            />
                            <Image
                                src="/koi/isotipo-blanco.png"
                                alt="next logo"
                                width="60"
                                height="60"
                            />
                        </picture>
                    </a>
                </header>
                <div className="grow flex flex-col items-center relative overflow-hidden">
                    <div className="absolute top-4 left-4 sm:top-10 sm:left-10">
                        <Image
                            src="/star.svg"
                            alt="detalle estrella"
                            width={50}
                            height={50}
                        ></Image>
                    </div>
                    <div className="px-2">
                        <MainHero></MainHero>
                    </div>
                    <div className="absolute hidden md:block bottom-14 -right-16">
                        <Image
                            src="/heroshape.svg"
                            alt="detalle forma"
                            width={200}
                            height={200}
                        ></Image>
                    </div>
                </div>
            </section>
            <section>
                <article className="py-10 space-y-6 md:py-16 md:space-y-16">
                    <div className="flex flex-col items-center px-3 gap-5 md:flex-row md:justify-center md:items-center">
                        <h2 className="font-semibold text-2xl sm:text-3xl text-wrap max-w-md">
                            Liderá con estilo en diseño y marketing digital con
                            Koi Studio
                        </h2>
                        <h4 className="max-w-md">
                            En Koi Studio hacemos que tu negocio brille: diseño
                            y desarrollo web, manejo de redes sociales,
                            fotografía de producto, branding, y marketing
                            digital. Con nuestro toque juvenil, tu marca estará
                            siempre a la moda y lista para destacar.
                        </h4>
                    </div>
                    <div className="px-2 md:px-4 max-w-4xl mx-auto">
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="flex flex-col gap-5 md:flex-row md:items-stretch md:justify-center md:gap-6"
                        >
                            <SwiperSlide className="flex-shrink-0">
                                <div className="max-w-md mx-auto border-2 border-black rounded-xl basis-72 grow flex flex-col gap-6 py-10 px-8 justify-between md:h-[420px] group transition-colors hover:bg-orange-100 cursor-pointer">
                                    <Image
                                        src="/utils/phoneicon.svg"
                                        alt="diseño y desarrollo web"
                                        width={50}
                                        height={50}
                                    />
                                    <div>
                                        <h3 className="font-semibold text-xl">
                                            Diseño y Desarrollo Web
                                        </h3>
                                        <p>
                                            Creamos sitios web atractivos y
                                            funcionales, hechos a medida para tu
                                            negocio.
                                        </p>
                                    </div>
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 transition group-hover:underline"
                                    >
                                        <span>Descubre Mas</span>
                                        <Image
                                            src="/utils/arrow.svg"
                                            alt="descubre mas"
                                            width={20}
                                            height={20}
                                            className="ml-1 -translate-x-3 opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100"
                                        />
                                    </a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="flex-shrink-0">
                                <div className="max-w-md mx-auto border-2 border-black rounded-xl basis-72 grow flex flex-col gap-6 py-10 px-8 justify-between md:h-[420px] group transition-colors hover:bg-blue-100 cursor-pointer">
                                    <Image
                                        src="/utils/handsicon.svg"
                                        alt="redes sociales"
                                        width={50}
                                        height={50}
                                    />
                                    <div>
                                        <h3 className="font-semibold text-xl">
                                            Redes Sociales
                                        </h3>
                                        <p>
                                            Creamos sitios web atractivos y
                                            funcionales, hechos a medida para tu
                                            negocio.
                                        </p>
                                    </div>
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 transition group-hover:underline"
                                    >
                                        <span>Descubre Mas</span>
                                        <Image
                                            src="/utils/arrow.svg"
                                            alt="descubre mas"
                                            width={20}
                                            height={20}
                                            className="ml-1 -translate-x-3 opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100"
                                        />
                                    </a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="flex-shrink-0">
                                <div className="max-w-md mx-auto border-2 border-black rounded-xl basis-72 grow flex flex-col gap-6 py-10 px-8 justify-between md:h-[420px] group transition-colors hover:bg-green-100 cursor-pointer">
                                    <Image
                                        src="/utils/ideaicon.svg"
                                        alt="diseño digital"
                                        width={50}
                                        height={50}
                                    />
                                    <div>
                                        <h3 className="font-semibold text-xl">
                                            Diseño Digital
                                        </h3>
                                        <p>
                                            Creamos sitios web atractivos y
                                            funcionales, hechos a medida para tu
                                            negocio.
                                        </p>
                                    </div>
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 transition group-hover:underline"
                                    >
                                        <span>Descubre Mas</span>
                                        <Image
                                            src="/utils/arrow.svg"
                                            alt="descubre mas"
                                            width={20}
                                            height={20}
                                            className="ml-1 -translate-x-3 opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100"
                                        />
                                    </a>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </article>
                <article className="py-10 space-y-6 sm:py-16 flex flex-col md:flex-row md:justify-around md:items-center md:px-2 lg:justify-center lg:gap-28">
                    <div className="flex justify-center">
                        <Image
                            src="/article1.svg"
                            alt="imagen de articulo para convertir clientes con nuestras webs"
                            width={300}
                            height={200}
                        ></Image>
                    </div>
                    <div className="flex flex-col justify-center px-3 space-y-5 max-w-md mx-auto md:w-auto md:mx-0">
                        <h2 className="font-semibold text-3xl">
                            Convertí visitas en clientes con nuestras webs
                            diseñadas para destacar
                        </h2>
                        <h4>
                            En Koi Studio, transformamos el tráfico web en
                            clientes a través de diseños impactantes y
                            estrategias de conversión efectivas. Creamos sitios
                            web que no solo destacan, sino que también guían a
                            los visitantes a tomar acciones decisivas para tu
                            negocio.
                        </h4>
                    </div>
                </article>
                <article className="py-10 space-y-6 sm:py-16 flex flex-col md:flex-row-reverse md:justify-around md:items-center md:px-2 lg:justify-center lg:gap-28">
                    <div className="flex justify-center">
                        <Image
                            src="/article2.svg"
                            alt="imagen de articulo para construir marca"
                            width={300}
                            height={200}
                        ></Image>
                    </div>
                    <div className="flex flex-col justify-center px-3 space-y-5 max-w-md mx-auto md:w-auto md:mx-0">
                        <h2 className="font-semibold text-3xl">
                            Construí tu marca y atraé a tus clientes ideales
                        </h2>
                        <h4>
                            En Koi Studio, diseñamos sitios web que fortalecen
                            tu marca y atraen a tus clientes ideales. Con un
                            diseño atractivo y estrategias de comunicación
                            efectivas, convertimos tu presencia en línea en una
                            herramienta poderosa para conectar con tu audiencia
                            y alcanzar tus objetivos de negocio
                        </h4>
                    </div>
                </article>
            </section>
            <section className="bg-[#1A1A1A] text-white">
                <div className="flex flex-col items-center text-center py-10 gap-16 md:flex-row md:justify-center md:py-20 lg:gap-24">
                    <div>
                        <h3 className="text-5xl md:text-6xl font-semibold md:text-start">
                            2
                        </h3>
                        <p className="text-gray-400 md:text-lg lg:text-xl">
                            Años de experiencia
                        </p>
                    </div>
                    <div>
                        <h3 className="text-5xl md:text-6xl font-semibold md:text-start">
                            10K
                        </h3>
                        <p className="text-gray-400 md:text-lg lg:text-xl">
                            Seguidores en redes sociales
                        </p>
                    </div>
                    <div>
                        <h3 className="text-5xl md:text-6xl font-semibold md:text-start">
                            67
                        </h3>
                        <p className="text-gray-400 md:text-lg lg:text-xl">
                            Proyectos completados
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <article className="py-10 space-y-6 sm:py-16 flex flex-col md:flex-row-reverse md:justify-around md:items-center md:px-2 lg:justify-center lg:gap-28">
                    <div className="flex flex-col justify-center px-3 space-y-5 max-w-md mx-auto md:w-auto md:mx-0">
                        <h2 className="font-semibold text-3xl text-center md:text-start">
                            La mejor forma de convertir visitas en ventas
                        </h2>
                        <h4>
                            La creación de comunidades no se trata solo de
                            reunir personas, sino de construir un espacio donde
                            tus clientes se sientan parte de algo más grande
                        </h4>
                    </div>
                    <div className="flex justify-center items-center mb-5">
                        <div className="size-[200px] relative">
                            <Vcl />
                        </div>
                    </div>
                </article>
                <article className="py-10 sm:py-16 px-2">
                    <h2 className="font-semibold text-3xl text-center text-balance md:text-4xl flex flex-col">
                        <span>Desarrollo web que se adaptan a</span>
                        <span>tus necesidades</span>
                    </h2>
                    <div className="py-10 flex flex-col md:flex-row md:items-center md:justify-center gap-4 max-w-sm mx-auto md:max-w-fit">
                        <div className="bg-[#E5EEF5] py-8 px-6 md:px-10 rounded-xl space-y-6 h-full">
                            <div className="space-y-4">
                                <h3 className="text-lg">Landing Page</h3>
                                <h3 className="text-4xl font-semibold">
                                    <span className="text-xl">$</span>
                                    <i>200</i>
                                </h3>
                                <p className="text-sm">Pago Único</p>
                            </div>
                            <ul className="border-t border-gray-400 py-8 space-y-3">
                                <li className="flex items-center gap-2">
                                    <Image
                                        src="/utils/check.svg"
                                        alt="1 pagina"
                                        width={20}
                                        height={20}
                                    />
                                    <p> 1 Página</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Image
                                        src="/utils/check.svg"
                                        alt="30 Propuestas de diseño"
                                        width={20}
                                        height={20}
                                    />
                                    <p>30 Propuestas de diseño</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Image
                                        src="/utils/check.svg"
                                        alt="Hosting y dominio (anual)"
                                        width={20}
                                        height={20}
                                    />
                                    <p>Hosting y dominio (anual)</p>
                                </li>
                            </ul>
                            <button className="border-2 border-black py-1 px-8 font-semibold transition-colors hover:bg-black hover:text-white">
                                Ver Más
                            </button>
                        </div>
                        <div className="bg-[#12141D] text-white py-8 px-6 md:px-10 rounded-xl space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-lg">Corporativo</h3>
                                <h3 className="text-4xl font-semibold">
                                    <span className="text-xl">$</span>
                                    <i>350</i>
                                </h3>
                                <p className="text-sm">Pago Único</p>
                            </div>
                            <ul className="border-t border-gray-400 py-8 space-y-3">
                                <li className="flex items-center gap-2">
                                    <Image
                                        src="/utils/check.svg"
                                        alt="4 paginas"
                                        width={20}
                                        height={20}
                                    />
                                    <p> 4 Páginas</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Image
                                        src="/utils/check.svg"
                                        alt="30 Propuestas de diseño"
                                        width={20}
                                        height={20}
                                    />
                                    <p>Diseño a medida</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Image
                                        src="/utils/check.svg"
                                        alt="Hosting y dominio (anual)"
                                        width={20}
                                        height={20}
                                    />
                                    <p>Hosting y dominio (anual)</p>
                                </li>
                            </ul>
                            <button className="border-2 border-white py-1 px-8 font-semibold transition-colors hover:bg-white hover:text-black">
                                Ver Más
                            </button>
                        </div>
                        <div className="bg-[#E5EEF5] py-8 px-6 md:px-10 rounded-xl space-y-6 h-full">
                            <div className="space-y-4">
                                <h3 className="text-lg">E-commerce</h3>
                                <h3 className="text-4xl font-semibold">
                                    <span className="text-xl">$</span>
                                    <i>400</i>
                                </h3>
                                <p className="text-sm">Pago Único</p>
                            </div>
                            <ul className="border-t border-gray-400 py-4 space-y-3">
                                <li className="flex items-center gap-2">
                                    <Image
                                        src="/utils/check.svg"
                                        alt="Meta Pixel"
                                        width={20}
                                        height={20}
                                    />
                                    <p> Meta Pixel</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Image
                                        src="/utils/check.svg"
                                        alt="Diseño a medida"
                                        width={20}
                                        height={20}
                                    />
                                    <p>Diseño a medida</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Image
                                        src="/utils/check.svg"
                                        alt="Hosting y dominio (anual)"
                                        width={20}
                                        height={20}
                                    />
                                    <p>Dominio (anual)</p>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Image
                                        src="/utils/check.svg"
                                        alt="Hosting y dominio (anual)"
                                        width={20}
                                        height={20}
                                    />
                                    <p>Mantenimiento (primer mes)</p>
                                </li>
                            </ul>
                            <button className="border-2 border-black py-1 px-8 font-semibold transition-colors hover:bg-black hover:text-white">
                                Ver Más
                            </button>
                        </div>
                    </div>
                </article>
                <article>
                    <h3>FAQ</h3>
                </article>
            </section>
            <footer></footer>
        </main>
    );
}
