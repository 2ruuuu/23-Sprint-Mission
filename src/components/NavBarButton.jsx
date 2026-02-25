import styles from "./NavBarButton.module.css";

const NavBarButton = ({children}) => {
  return <button className={styles.button}>{children}</button>;
};

export default NavBarButton;
