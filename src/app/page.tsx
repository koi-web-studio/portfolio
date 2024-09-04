import Image from "next/image";
import Link from "next/link";

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
                <div className="grow flex flex-col items-center py-20 md:py-24 relative overflow-hidden">
                    <div className="absolute top-4 left-4 sm:top-10 sm:left-10">
                        <Image
                            src="/star.svg"
                            alt="detalle estrella"
                            width={50}
                            height={50}
                        ></Image>
                    </div>
                    <div className="px-2">
                        <div className="relative">
                            <div className="absolute hidden sm:block sm:-right-5 sm:-top-6 md:-right-10">
                                <Image
                                    src="/textdetail.svg"
                                    alt="detalle en texto"
                                    width={40}
                                    height={40}
                                    className="md:w-12"
                                ></Image>
                            </div>
                            <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center flex flex-col">
                                <span>Webs que convierten</span>
                                <span>visitas en clientes</span>
                            </h1>
                        </div>
                        <h2 className="mt-3 text-center text-sm sm:text-lg md:text-xl text-balance">
                            <i>
                                Convierte cada visita en una oportunidad de
                                venta
                            </i>
                        </h2>
                        <div className="mt-6 flex flex-col items-center justify-center gap-2 md:flex-row">
                            <button className="py-3 rounded w-48 text-sm bg-[#690B30] text-white">
                                Portfolio
                            </button>
                            <button className="bg-gray-200 py-3 rounded w-48 text-sm outline outline-1 flex items-center justify-center gap-2">
                                <Image
                                    src="/utils/play.svg"
                                    alt="play VCL"
                                    width={20}
                                    height={20}
                                ></Image>
                                <span>Mira nuestra VCL</span>
                            </button>
                        </div>
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
                    <div className="flex flex-col items-center px-2 gap-5 md:flex-row md:justify-center md:items-center">
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
                    <div className="px-2 md:px-16 flex flex-col gap-5 md:flex-row md:items-stretch md:justify-center md:gap-6">
                        <div className="outline outline-2 rounded-xl basis-72 grow flex flex-col gap-6 py-10 px-8 justify-between">
                            <Image
                                src="/utils/phoneicon.svg"
                                alt="diseño y desarrollo web"
                                width={50}
                                height={50}
                            ></Image>
                            <div>
                                <h3 className="font-semibold text-xl">
                                    Diseño y Desarrollo Web
                                </h3>
                                <p>
                                    Creamos sitios web atractivos y funcionales,
                                    hechos a medida para tu negocio.
                                </p>
                            </div>
                            <a href="#" className="flex items-center gap-2">
                                <span>Descubre Mas</span>
                                <Image
                                    src="/utils/arrow.svg"
                                    alt="descubre mas"
                                    width={20}
                                    height={20}
                                ></Image>
                            </a>
                        </div>
                        <div className="outline outline-2 rounded-xl basis-72 grow flex flex-col gap-6 py-10 px-8 justify-between">
                            <Image
                                src="/utils/handsicon.svg"
                                alt="redes sociales"
                                width={50}
                                height={50}
                            ></Image>
                            <div>
                                <h3 className="font-semibold text-xl">
                                    Redes Sociales
                                </h3>
                                <p>
                                    Creamos sitios web atractivos y funcionales,
                                    hechos a medida para tu negocio.
                                </p>
                            </div>
                            <a href="#" className="flex items-center gap-2">
                                <span>Descubre Mas</span>
                                <Image
                                    src="/utils/arrow.svg"
                                    alt="descubre mas"
                                    width={20}
                                    height={20}
                                ></Image>
                            </a>
                        </div>
                        <div className="outline outline-2 rounded-xl basis-72 grow flex flex-col gap-6 py-10 px-8 justify-between">
                            <Image
                                src="/utils/ideaicon.svg"
                                alt="diseño digital"
                                width={50}
                                height={50}
                            ></Image>
                            <div>
                                <h3 className="font-semibold text-xl">
                                    Diseño Digital
                                </h3>
                                <p>
                                    Creamos sitios web atractivos y funcionales,
                                    hechos a medida para tu negocio.
                                </p>
                            </div>
                            <a href="#" className="flex items-center gap-2">
                                <span>Descubre Mas</span>
                                <Image
                                    src="/utils/arrow.svg"
                                    alt="descubre mas"
                                    width={20}
                                    height={20}
                                ></Image>
                            </a>
                        </div>
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
                    <div className="flex flex-col justify-center px-2 space-y-5 max-w-md mx-auto md:w-auto md:mx-0">
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
                    <div className="flex flex-col justify-center px-2 space-y-5 max-w-md mx-auto md:w-auto md:mx-0">
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
                <article>
                    <div>{/* <Image></Image> */}</div>
                    <div>
                        <h2>The easiest way to promote social media</h2>
                        <div>
                            <div>
                                <h3>Build A Community</h3>
                                <p>
                                    Community building is a field of practices
                                    directed toward the creation or enhancement
                                    of community among individuals.
                                </p>
                            </div>
                            <div>
                                <h3>Video & Live Streaming</h3>
                                <p>
                                    Connect your audio and video sources. This
                                    involves on audio and video sources to your
                                    main live streaming setup.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
                <article>
                    <h2>Choose a plan that works for you</h2>
                    <div>
                        <div>
                            <h3>$$</h3>
                        </div>
                        <div>
                            <h3>$$</h3>
                        </div>
                        <div>
                            <h3>$$</h3>
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
