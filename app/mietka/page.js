import Link from "next/link";
import Image from "next/image";
import Mietka from "images/Mietka.png";

export default function Page() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4 ">
            <div className="relative overflow-hidden h-[500px] rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src={Mietka}
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 mb-6 text-indigo-600">
                <Link
                  href="/"
                  className="rounded-md bg-gray-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Powrót do strony głównej
                </Link>
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Izabela Miętka
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Izabela Miętka terapeutka medycyny chińskiej,
                  akupunkturzystka, Prezeska Polskiego Towarzystwa Tradycyjnej
                  Medycyny Chińskiej, filozofka i socjolożka. Ukończyła filię
                  Instytutu Avicenny w Krakowie, uczyła się na stażu w Nepalu
                  oraz na licznych szkoleniach, warsztatach, kongresach w
                  Polsce, Niemczech, Belgii, USA oraz w Izraelu.
                </p>{" "}
                <p className="mt-6">
                  Prowadzi własną praktykę w Warszawie. Szczególnie bliskie jej
                  sercu jest pomaganie kobietom we wszelkich problemach
                  ginekologicznych oraz parom starającym się o potomstwo. Stara
                  się upowszechniać wiedzę dotyczącą medycyny chińskiej
                  prowadząc swój podcast : Droga Serca. O medycynie chińskiej. Z
                  radością prowadzi zajęcia ze studentami w Acuart. Wykładała na
                  kongresach w Krakowie, Cambridge, Grazu oraz w wersji online
                  izraelskiego ICCM. Od 2019 organizuje Tcm Kongres w Krakowie.
                </p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4"></dl>
            <div className="mt-10 flex">
              <Link
                href="/download"
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                Wykłady <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
