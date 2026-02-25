import searchIcon from "../assets/search.svg";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <form>
      <div className={styles.box}>
        <div className={styles.container}>
          <img src={searchIcon} alt="돋보기 이미지" />
          <input
            className={styles.input}
            placeholder="검색할 상품을 입력해주세요"
          ></input>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
