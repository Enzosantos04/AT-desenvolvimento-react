import { useState } from "react";
import styles from "../styles/FaqCard.module.css";

const FaqCard = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  return (
    <div className={styles.faqCard}>
      <div className={styles.question}>{question}</div>
      {isVisible && <div className={styles.answer}>{answer}</div>}
      <button className={styles.button} onClick={handleToggle}>
        {isVisible ? "Esconder Resposta" : "Mostrar Resposta"}
      </button>
    </div>
  );
};

export default FaqCard;
