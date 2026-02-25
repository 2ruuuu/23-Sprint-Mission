import styles from "./Pagination.module.css";
import PaginationItem from "./PaginationItem";

const Pagination = ({handlePageClick, page}) => {
  return (
    <div className={styles.container}>
      <PaginationItem pageNumber={"<"} />
      <PaginationItem
        pageNumber={1}
        handlePageClick={handlePageClick}
        page={page}
      />
      <PaginationItem
        pageNumber={2}
        handlePageClick={handlePageClick}
        page={page}
      />
      <PaginationItem
        pageNumber={3}
        handlePageClick={handlePageClick}
        page={page}
      />
      <PaginationItem
        pageNumber={4}
        handlePageClick={handlePageClick}
        page={page}
      />
      <PaginationItem
        pageNumber={5}
        handlePageClick={handlePageClick}
        page={page}
      />
      <PaginationItem pageNumber={">"} />
    </div>
  );
};

export default Pagination;
