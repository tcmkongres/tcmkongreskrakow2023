import Link from "next/link";
import Image from "next/image";
import Pokrywka from "images/Pokrywka.jpeg";
import Olszowska from "images/Olszowska.jpeg";
import Lapa from "images/Lapa.png";
import Brejecka from "images/Brejecka.png";
import Chmielnicki from "images/Chmielnicki.png";
import Maimon from "images/Maimon.png";
import Ayal from "images/Ayal.png";
import Teixeira from "images/Teixeira.png";
import Jie from "images/Jie.png";
import Montakab from "images/Montakab.jpeg";
import Baik from "images/Baik.jpg";

const people = [
  {
    name: "Katarzyna Pokrywka",
    role: "Doctor",
    imageUrl: Pokrywka,
    url: "/pokrywka",
    bio: "Medycyna Chińska jest moją pasją, filozofią życia i pracą. Akupunktura jest głównym narzędziem mojej pracy. Od ponad 15 lat prowadzę swój gabinet we Wrocławiu. Pomagam kobietom, które cierpią z powodu zaburzeń swojego cyklu miesiączkowego. Wspieram niepłodne pary w odbudowaniu swojego ciała i przygotowaniu się do poczęcia. Dbam o zdrowie i odporność kobiet w ciąży oraz małych dzieci. Prowadzę kursy akupunktury dla terapeutów oraz warsztaty medycyny chińskiej dla swoich pacjentów. ",
  },
  {
    name: "Bożena Olszowska",
    role: "Doctor",
    imageUrl: Olszowska,
    url: "/olszowska",
    bio: "Bożena Olszowska to doświadczona naturoterapeutka, dietoterapeutka oraz terapeutka Tradycyjnej Medycyny Chińskiej. Swoje wykształcenie zdobywała na Studium Edukacji Ekologicznej, gdzie studiowała Terapie Naturalne, na Wydziale Biologii i Ochrony Środowiska Uniwersytetu Śląskiego oraz w Akademii Akupunktury Compleo w Katowicach.",
  },
  {
    name: "Dorota Łapa",
    role: "Doctor",
    imageUrl: Lapa,
    url: "/lapa",
    bio: "Terapeutka Medycyny chinskiej, dietetyczka i akupunkturzystka.",
  },
  {
    name: "Joanna Brejecka-Pamungkas",
    role: "Doctor",
    imageUrl: Brejecka,
    url: "/brejecka",
    bio:
      "Dyplomowany naturopata ze Stanów Zjednoczonych (ND – naturopatic doctor), dietetyk holistyczny, terapeutka" +
      " medycyny chińskiej, terapeutka Tuiny pediatrycznej, ekspert w programach w TV, autor artykułów w tematyce zdrowia naturalnego, autorka książki „Naturalnie Zdrowe Dziecko”, szkoleniowiec, autorka pierwszego w Polsce kursu Tuina online dla dzieci.",
  },
  {
    name: "Bartosz Chmielnicki",
    role: "Doctor",
    imageUrl: Chmielnicki,
    url: "/chmielnicki",
    bio: "Bartosz Chmielnicki jest lekarzem medycyny, praktykującym i uczącym akupunktury od 2004 roku.",
  },
  {
    name: "Yair Maimon",
    role: "Doctor",
    imageUrl: Maimon,
    url: "/maimon",
    bio:
      "Dr. Yair Maimon OMD, PhD Ac\n" +
      "is an internationally renowned figure in the field of Integrative and Chinese Medicine with over 30 years of clinical, academic, and research experience in the United States, Europe, China and Israel.",
  },
  {
    name: "Rani Ayal",
    role: "Doctor",
    imageUrl: Ayal,
    url: "/ayal",
    bio: "Rani Ayal has been studying, practicing and teaching Chinese Medicine for over thirty years.",
  },
  {
    name: "Ricardo Teixeira",
    role: "Doctor",
    imageUrl: Teixeira,
    url: "/teixeira",
    bio: "Ricardo is a licensed Acupuncturist and also as the number one licence in Traditional Chinese Medicine Specialist in Portugal.",
  },
  {
    name: "Prof. Li Jie",
    role: "Doctor",
    imageUrl: Jie,
    url: "/jie",
    bio: "He has been practicing TCM 30 years in Europe.",
  },
  {
    name: "Hamid Montakab",
    role: "Doctor",
    imageUrl: Montakab,
    url: "/montakab",
    bio: "Hamid Montakab graduated from the Medical School of Paris, did his residency in surgery as well as completing an education in acupuncture in France and in China.",
  },
  {
    name: "Jong Kook Baik",
    role: "Doctor",
    imageUrl: Baik,
    url: "/baik",
    bio: "Jong Kook Baik is originally from South Korea and is now living in England. He is an Award-Winning international lecturer specialising in micro-acupuncture systems particularly Korean Hand Therapy (KHT).",
  },
  // More people...
];

export default function Speakers() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nasi wykładowcy
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Mamy zaszczyt przedstawić nasz zespół wykładowców na nadchodzący
            Kongres TCM w Krakowie. Wszyscy nasi prelegenci to doświadczeni
            praktycy medycyny chińskiej, z solidnym tłem edukacyjnym i
            praktycznym.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <Link key={person.name} href={person.url}>
              <li className="flex flex-col gap-6 xl:flex-row ">
                <Image
                  className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover shadow-2xl"
                  src={person.imageUrl}
                  alt=""
                />

                <div className="flex-auto">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  {/*<p className="text-base leading-7 text-gray-600">*/}
                  {/*  {person.role}*/}
                  {/*</p>*/}
                  <p className="mt-6 text-base leading-7 text-gray-600">
                    {person.bio}
                  </p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
