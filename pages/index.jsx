import Intro from "../components/Intro";
import Services from "../components/Services";
import { data } from "../api/data";
import Testimonials from "../components/Testimonials";
export default function IndexPage({ services }) {
  return (
    <>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </>
  );
}
export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services }
  };
};
