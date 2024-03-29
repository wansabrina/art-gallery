import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Collection from "../components/Collection";
import Footer from "../components/Footer";
import Programs from "../components/Programs";
import CollectionSlider from "../components/CollectionSlider";


const Hero = dynamic(() => import("../components/Hero"), { ssr: false });

export default function Index() {
  return (
    <>
      <Head>
        <title>Van Gogh</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="bg-yellow-100">
        <Navbar data-testid="navbar" />
        <Hero data-testid="hero-section" />
        <Collection data-testid="collection" />
        <CollectionSlider data-testid="collection-slider" />
        <Programs data-testid="programs" />
        <Footer data-testid="footer" />
      </section>
    </>
  );
}
