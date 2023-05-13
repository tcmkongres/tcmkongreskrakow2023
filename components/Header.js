import logo from "../app/logo.png";
import hero from "../app/krakow-miasto.jpg";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl">
          <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
            <nav
              className="flex items-center justify-between lg:justify-start"
              aria-label="Global"
            >
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">TCM Kongres</span>
                <Image
                  alt="Polskie Towarzystwo Tradycyjnej Medycyny Chińskiej"
                  className="h-24 w-auto"
                  src={logo}
                />
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-40 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  TCM KONGRES
                </h1>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Kraków 13-15 października 2023
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Zapraszamy na V Międzynarodowy Kongres Medycyny Chińskiej
                  organizowany przez Polskie Towarzystwo Tradycyjnej Medycyny
                  Chińskiej (PTTMC) w Krakowie. Po przerwie spowodowanej
                  pandemią czekamy na Was spragnieni bycia razem, wspólnego
                  słuchania wykładów naszych wspaniałych nauczycieli, wzajemnej
                  wymiany doświadczeń, inspiracji oraz wspólnej zabawy na
                  bankiecie. Celem Kongresu jest stworzenie specjalnego miejsca
                  spotkań dla terapeutów medycyny chińskiej z różnych stron
                  Polski i świata, w którym mogą się uczyć od doświadczonych
                  wykładowców i praktyków Tcm, rozwijać się oraz integrować po
                  to, by naładować akumulatory, wypełnić wiedzą i jak lepiej
                  służyć pacjentom w swoich gabinetach. Jesienne barwy,
                  niezwykłe uliczki Krakowa, spacery nad Wisłą, po Rynku czy
                  Kazimierzu tworzą przepiękną scenerię tego wydarzenia.
                  Cieszymy się ogromnie, że niezwykli nauczyciele Tcm przyjadą
                  specjalnie do Krakowa, żeby dzielić się swoją wiedzą oraz
                  doświadczeniem, odpowiadać na pytania i być dla nas. Cieszymy
                  się również, że wszyscy się spotkamy. Czekamy na Was w
                  Krakowie!!!
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="https://app.easycart.pl/checkout/88568273/bilet-tcm-kongres-krakow?plan=price_1N5CJAKiB9TlQ7ZZuzFgsFRl"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Kup swoj bilet <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={hero}
            alt="Kraków"
          />
        </div>
      </div>
    </div>
  );
}
