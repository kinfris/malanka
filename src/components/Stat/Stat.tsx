import styles from "./stat.module.css";

type PropType = {
  amount: string;
  name: string;
};

export const Stat = ({ amount, name }: PropType) => {
  return (
    <div className={styles.wrapper}>
      <h2>{amount}</h2>
      <div>{name}</div>
    </div>
  );
};
