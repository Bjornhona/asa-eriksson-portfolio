import styles from "./animatedMenu.module.css";
import Burger from "./burger";

const MenuToggle = ({ toggle }: { toggle: () => void }) => {
  return (
    <button className={styles.toggleContainer} onClick={toggle} aria-label="Toggle menu">
      <Burger />
    </button>
  );
};

export default MenuToggle;
