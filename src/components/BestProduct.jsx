import styles from './BestProduct.module.css';
import ProductItem from './ProductItem';

const BestProduct = ({ bestProducts }) => {
  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        {bestProducts.map((bestProduct) => (
          <ProductItem key={bestProduct.id} product={bestProduct} />
        ))}
      </div>
    </div>
  );
};

export default BestProduct;
