import Head from "next/head";
import Intro from "../components/Intro";
import Services from "../components/Services";
import { data } from "../api/data";
import Testimonials from "../components/Testimonials";

export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>DEVISE || Digital Product Agency</title>
        <meta
          name="description"
          content="Web Design, App Development, Content Creation Agency Near Mohali"
        />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
