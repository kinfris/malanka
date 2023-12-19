import Image from "next/image";
import styles from "./portfolio.module.css";

type PropsType = {
  imageUrl: string;
  name: string;
};

export const Portfolio = ({ imageUrl, name }: PropsType) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image fill src={imageUrl} alt={name} quality={100} sizes="28vw" />
        <a
          href={`project/${name.toLocaleLowerCase()}`}
          className={styles.seeMore}
        >
          <div className={styles.iconWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
              <path
                fill="#232326"
                d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                data-name="Right"
              />
            </svg>
          </div>
        </a>
      </div>

      <h2>{name}</h2>
    </div>
  );
};
