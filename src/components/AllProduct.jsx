import styles from "./AllProduct.module.css";
import ProductItem from "./ProductItem";

const AllProduct = ({products, isLoading}) => {
  if (isLoading) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        {products.map((product) => (
          <ProductItem key={product.id} isSmall={true} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
