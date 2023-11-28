import { Capacitor } from "@capacitor/core";
import styles from "./page.module.css";

const Auth = () => {
  return (
    <div className={styles.authContainer}>
      <p className={styles.authTitle}>
        Для использования данного приложения необходимо авторизоваться
      </p>

      <p className={styles.authTitle}>
        {`Capacitor.getPlatform() === "web" ${
          Capacitor.getPlatform() === "web"
        }`}
      </p>

      <p className={styles.authTitle}>
        {`Capacitor.getPlatform() === "ios" ${
          Capacitor.getPlatform() === "ios"
        }`}
      </p>

      <p className={styles.authTitle}>
        {`Capacitor.getPlatform() === "androud" ${
          Capacitor.getPlatform() === "androud"
        }`}
      </p>
    </div>
  );
};

export default Auth;
