import Head from "next/head";
import Hero from "../components/Home";
import SocialMediaLinks from "../components/SocialMediaLinks";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Aarush Goyal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <SocialMediaLinks />
      </main>
    </div>
  );
}
