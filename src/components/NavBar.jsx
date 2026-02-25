import styles from "./NavBar.module.css";
import NavBarButton from "./NavBarButton";
import logo from "../assets/logo.svg";
import myPageLogo from "../assets/myPageLogo.svg";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarContainer}>
        <div className={styles.navBarLeftContainer}>
          <img src={logo} alt="판다마켓 로고" />
          <div className={styles.buttonContainer}>
            <NavLink
              to="https://naver.com"
              className={({isActive}) => (isActive ? styles.active : null)}
            >
              {" "}
              {/* 자유게시판은 임시 Link */}
              <NavBarButton>자유게시판</NavBarButton>
            </NavLink>
            <NavLink
              to="/items"
              className={({isActive}) => (isActive ? styles.active : null)}
            >
              <NavBarButton>중고마켓</NavBarButton>
            </NavLink>
          </div>
        </div>
        <div className={styles.navBarRightContainer}>
          <img src={myPageLogo} alt="마이페이지 로고" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
