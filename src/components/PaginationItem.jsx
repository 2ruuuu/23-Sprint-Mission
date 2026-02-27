import styles from "./PaginationItem.module.css";

const PaginationItem = ({pageNumber, page, handlePageClick}) => {
  return (
    <button
      className={`${styles.button} ${page === pageNumber ? styles.current : ""}`}
      onClick={() => handlePageClick(pageNumber)}
    >
      {pageNumber}
    </button>
  );
};

export default PaginationItem;
