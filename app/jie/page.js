import Link from "next/link";
import Image from "next/image";
import Jie from "images/Jie.png";

export default function Page() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4 ">
            <div className="relative overflow-hidden h-[500px] rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                src={Jie}
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
                Prof. Li Jie
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  He has been practicing TCM 30 years in Europe.
                </p>
                <p className="mt-6"></p>
                <p className="mt-6">
                  {" "}
                  He has been involved in the development of international
                  education and practices of Classical Chinese Medicine (CCM) in
                  the countries like the Netherlands, Germany, Sweden,
                  Switzerland, Austria, Poland, Rumania, Czech Republic, Denmark
                  and China for last decades.
                </p>
                <p className="mt-6">
                  {" "}
                  He is one of the founders of Qing-Bai TCM Academy in the
                  Netherlands, the TCM Classical Research Institute and TCM
                  School TOMO in Poland.
                </p>
                <p className="mt-6">
                  He is annual speaker at the TCM congress in Rothenburg
                  (Germany).
                </p>
                <p className="mt-6">
                  {" "}
                  He is a board member of the World Federation of Chinese
                  Medicine Societies (WFCMS) examination committee.
                </p>
                <p className="mt-6">
                  {" "}
                  Since 2003 he has been appointed as a guest professor of
                  Shandong TCM University Jinan China.
                </p>
                <p className="mt-6">
                  {" "}
                  He is also the holding director of the European Branch of
                  “Inheritance of Traditional Chinese Medicine China National Qi
                  Lu School of Miscellaneous Diseases”.
                </p>
                <p className="mt-6">
                  {" "}
                  Since 2005, he has focused on lecturing Classical TCM works,
                  Huang Di Nei Jing, Shang Han Lun and Jin Gui Yao Lüe, Nan
                  Jing, Zhen Jiu Jia Yi Jing, Zhen Jiu Da Cheng etc.
                </p>
                <p className="mt-6">
                  {" "}
                  He has been more than 10 years column writer of “Answer the
                  difficult TCM questions by CCM texts explanation” for Journal
                  Huang Ti, Netherlands.
                </p>
                <p className="mt-6">
                  {" "}
                  He is PhD of physiology, Nijmegen University in The
                  Netherlands.
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
