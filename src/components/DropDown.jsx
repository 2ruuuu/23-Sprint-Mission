import styles from "./DropDown.module.css";

const DropDown = ({handleProductsSort}) => {
  return (
    <select className={styles.select} onChange={handleProductsSort}>
      <option value="recent">최신순</option>
      <option value="favorite">좋아요순</option>
    </select>
  );
};

export default DropDown;
