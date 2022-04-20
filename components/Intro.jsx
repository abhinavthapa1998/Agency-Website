import style from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={style.container}>
      <Circle backgroundColor="#6C63FF" top="-45vh" left="-45vh" />

      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>DEVISE</span> DIGITAL PRODUCT AGENCY
        </h1>
        <p className={style.desc}>
          Creating industry standard products for your next venture.
        </p>
        <button
          onClick={() =>
            window.open("https://github.com/abhinavthapa1998", "_blank").focus()
          }
          className={style.button}
        >
          DISCOVER
        </button>
      </div>
      <div className={style.card}>
        <Image
          src={process.env.NEXT_PUBLIC_URL + "/img/Avocado.png"}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
