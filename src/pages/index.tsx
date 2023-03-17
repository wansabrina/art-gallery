import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Collection from "../components/Collection";
import Footer from "../components/Footer";
import Programs from "../components/Programs";
import CollectionSlider from "../components/CollectionSlider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Van Gogh</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="bg-yellow-100">
        <Navbar />
        <Hero />
        <Collection />
        <CollectionSlider />
        <Programs />
        <Footer />
      </section>
    </>
  );
}
