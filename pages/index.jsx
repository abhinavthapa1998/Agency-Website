import Intro from "../components/Intro";
import Services from "../components/Services";
import { data } from "../api/data";
export default function IndexPage({ services }) {
  return (
    <>
      <Intro />
      <Services services={services} />
    </>
  );
}
export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services }
  };
};
