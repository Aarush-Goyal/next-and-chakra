import Head from "next/head";
import Hero from "../components/Home";
import { project } from "../config/project";
import Main from "../layouts/Main";
export default function Home() {
  return (
    <div>
      <Head>
        <title>{project.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Hero />
      </Main>

    </div>
  );
}
