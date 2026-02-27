import styles from './DropDown.module.css';

const DropDown = ({ handleProductsSort, children }) => {
  return (
    <select className={styles.select} onChange={handleProductsSort}>
      {children}
    </select>
  );
};

const Option = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};

DropDown.Option = Option;

export default DropDown;
