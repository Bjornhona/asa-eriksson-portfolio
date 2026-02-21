import styles from "./Logo.module.css";
import Image from "next/image";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
        <Image
          className={styles.logoImage}
          src="logo-light.svg"
          alt="Åsa Eriksson logo"
          width={100}
          height={100}
          priority
        />
        <div className={styles.logoTextContainer}>
          <h4 className={styles.logoText}>Åsa Eriksson</h4>
          <h5 className={styles.logoSubtext}>Design-driven Frontend Engineer</h5>
        </div>
    </div>
  )
}

export default Logo;
