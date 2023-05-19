import Link from "next/link";
import Image from "next/image";
import Teixeira from "images/Teixeira.png";

export default function Page() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4 ">
            <div className="relative overflow-hidden h-[500px] rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src={Teixeira}
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
                Ricardo Teixeira
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Ricardo is a licensed Acupuncturist and also as the number one
                  licence in Traditional Chinese Medicine Specialist in
                  Portugal. Vice president of the ETCMA (European Traditional
                  Chinese Medicine Association), ETCMA is an umbrella
                  organisation for professional associations that represent more
                  than 30 societies from 21 European countries that represent
                  different fields within Traditional Chinese Medicine.
                  Professor in the Portuguese Red Cross Northern Health School
                  in the bachelor degree in Acupuncture. Also, a Certified
                  Trainer in the area of Traditional Chinese Medicine.
                </p>{" "}
                <p className="mt-6">
                  Ricardo started TCM training in the APA-DA (Portugal) in 2003,
                  internship in Chengdu University of Traditional Chinese
                  Medicine in 2009, and took another internship in 2017 in
                  México with Dr Roberto González. He has undertaken
                  postgraduate courses at the Instituto Van Nghi in Portugal
                  with Dr. Tran Viet Dzung and several courses in the field of
                  TCM.
                </p>
                <p className="mt-6">
                  Ricardo has been invited to speak at several conferences
                  across Europe and South America. He is a founder member of the
                  World Acupuncture Day Organisation (WADO) and was part of the
                  organising committee for World Acupuncture Day at the UNESCO
                  Building in Paris. He is also a licensed Cardiopulmonologist
                  and a licensed Neurophysiologist.
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
