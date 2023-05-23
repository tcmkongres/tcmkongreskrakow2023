import Header from "@/components/Header";
import Speakers from "@/components/Speakers";
import { Schedule } from "@/components/Schedule";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Organizers from "@/components/Organizers";
import Faqs from "@/components/Faqs";
import Hotel from "@/components/Hotel";
import Layout from "app/layout";
import Koszyk from "@/components/Koszyk";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="bg-white">
          <Header></Header>
          <main>
            <About></About>
            <Speakers></Speakers>
            <Schedule></Schedule>
            <Hotel></Hotel>
            <Timeline></Timeline>
            <Koszyk></Koszyk>
            <Faqs></Faqs>
            <Organizers></Organizers>
            <Contact></Contact>
          </main>
          <Footer></Footer>
        </div>
      </Layout>
    </>
  );
}
