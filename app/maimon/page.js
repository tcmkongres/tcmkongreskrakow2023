import Link from "next/link";
import Image from "next/image";
import Maimon from "images/Maimon.png";

export default function Page() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4 ">
            <div className="relative overflow-hidden h-[500px] rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src={Maimon}
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
                Yair Maimon
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Dr. Yair Maimon OMD, PhD Ac is an internationally renowned
                  figure in the field of Integrative and Chinese Medicine with
                  over 30 years of clinical, academic, and research experience
                  in the United States, Europe, China and Israel.
                </p>
                <p className="mt-6">
                  He is the president of the ETCMA -European TCM Association,
                  representing TCM association from 24 countries.
                </p>
                <p className="mt-6">
                  Dr. Maimon formally the director of the complementary medical
                  unit at the Tel Aviv Medical Center for over 15 years and
                  directed an integrative oncology research center at Sheba
                  medical center in Israel. Dr. Maimon has published several
                  outstanding research articles in prominent scientific medical
                  journals showing a unique, promising results on the effect of
                  herbal medicine in cancer care.He is the founder of TCM
                  Academy of integrative medicine (TCM.AC) and has been a
                  keynote lecturer and taught post-graduate training seminars in
                  many international conferences on Integrative and Chinese
                  Medicine.
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
