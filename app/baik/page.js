import Link from "next/link";
import Image from "next/image";
import Baik from "images/Baik.jpg";

export default function Page() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4 ">
            <div className="relative overflow-hidden h-[500px] rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src={Baik}
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
                Jong Kook Baik
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Jong Kook Baik is originally from South Korea and is now
                  living in England. He is an Award-Winning international
                  lecturer specialising in micro-acupuncture systems
                  particularly Korean Hand Therapy (KHT).
                </p>{" "}
                <p className="mt-6">
                  Jong initially studied KHT in the early 1990s in South Korea
                  and was awarded a Diploma in KHT. He then went on to study for
                  four years at the Northern College of Acupuncture in York, UK
                  to gain his Diploma in Acupuncture. He studied for his Masters
                  degree in Acupuncture at the University of Wales and his PhD
                  in Traditional Chinese Medicine (Huangdi Neijing) at the
                  University of Wales Lampeter. He completed his PhD under the
                  prestigious Professor Bao Zhao Ju at the Liaoning University
                  of Traditional Chinese Medicine, Shenyang, China.
                </p>{" "}
                <p className="mt-6">
                  In 2016 he was awarded the title of Doctor of Acupuncture from
                  the World Federation of Acupuncture and Moxibustion Societies
                  (WFAS), Beijing, China. He went on to be awarded the title of
                  Clinical Specialist in Acupuncture from the Liaoning
                  University of Traditional Chinese Medicine in 2018.
                </p>{" "}
                <p className="mt-6">
                  Jong has worked as part of a palliative care team in a hospice
                  in Darlington for 14 years and is now a visiting professor at
                  Southern California University School of Oriental Medicine and
                  Acupuncture. He has written several books about Traditional
                  East Asian Medicine and contributed to numerous journals.
                </p>{" "}
                <p className="mt-6">
                  Since 2005 Jong has established his own teaching academy, Jong
                  Baik Education, based in Darlington, UK. He also splits his
                  time between running a busy clinic in Darlington and lecturing
                  in a wide range of subjects around the world.
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
