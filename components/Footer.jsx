import style from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.cardL}>
        <h1 className={style.title}>DEVISE CREATIVES.</h1>
        <h1 className={style.linkTitle}>
          <Link href="/contact" className={style.link} passHref>
            <>
              <span
                onClick={() =>
                  window
                    .open("https://github.com/abhinavthapa1998", "_blank")
                    .focus()
                }
                className={style.linkText}
              >
                WORK WITH US
              </span>
              <Image
                src={process.env.NEXT_PUBLIC_URL + "/img/link.png"}
                width="40px"
                height="40px"
                alt=""
              />
            </>
          </Link>
        </h1>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          13 BRIJ HOMES,MOHALI
          <br /> INDIA
        </div>
        <div className={style.cardItem}>
          CONTACT@ABHINAV_THAPA
          <br /> 111_438_5244
        </div>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          FOLLOW US:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={style.cardItem}>
          © 2022 ABHINAV THAPA,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
