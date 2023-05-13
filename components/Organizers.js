export default function Organizers() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Organizatorzy
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                Organizatorami wydarzenia są eksperci z dziedziny medycyny
                chińskiej oraz lokalne instytucje naukowe z Krakowa. Ich misją
                jest propagowanie wiedzy o medycynie chińskiej oraz umożliwienie
                wymiany doświadczeń pomiędzy specjalistami z Polski i zagranicy.
                Dzięki ich zaangażowaniu, uczestnicy będą mieli okazję
                uczestniczyć w inspirujących wykładach, warsztatach oraz
                dyskusjach, które pozwolą na zdobycie praktycznej wiedzy oraz
                nawiązanie cennych kontaktów w branży.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Polskie Towarzystwo Tradycyjnej Medycyny Chińskiej
                </h3>
                <dl className="mt-3 space-y-1 text leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Strona www</dt>
                    <dd>
                      <a
                        className="font-semibold text-indigo-600"
                        href="https://www.pttmc.org"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.pttmc.org
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Number</dt>
                    <dd>+48 111 111 111</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Instytut Medycyny Chińskiej i Profilaktyki Zdrowia
                </h3>
                <dl className="mt-3 space-y-1 text leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Strona www</dt>
                    <dd>
                      <a
                        className="font-semibold text-indigo-600"
                        href="https://www.medycyna-chinska.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.medycyna-chinska.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Number</dt>
                    <dd>+48 111 111 111</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Centrum Medycyny Chińskiej, Kraków
                </h3>
                <dl className="mt-3 space-y-1 text leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Strona www</dt>
                    <dd>
                      <a
                        className="font-semibold text-indigo-600"
                        href="https://www.medycynachinska.org"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.medycynachinska.org
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Number</dt>
                    <dd>+48 111 111 111</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  TCM Academy of Chinese Medicine
                </h3>
                <dl className="mt-3 space-y-1 text leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Strona www</dt>
                    <dd>
                      <a
                        className="font-semibold text-indigo-600"
                        href="https://www.tcm.ac"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.tcm.ac
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Number</dt>
                    <dd>+48 111 111 111</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
