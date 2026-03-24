import styles from './ProductItem.module.css';
import placeholder from '../assets/productItemPlaceHolder.svg';
import heart from '../assets/heart.svg';
import { useNavigate } from 'react-router-dom';

const ProductItem = ({ isSmall, product }) => {
  const navigate = useNavigate();

  if (!product) {
    return null;
  }

  const containerClass = `${styles.container} ${isSmall ? styles.small : ''}`;

  return (
    <button
      className={containerClass}
      onClick={() => navigate(`/items/${product.id}`)}
    >
      <img src={product.images?.[0] || placeholder} alt="상품 이미지" />
      <div className={styles.itemContent}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.price}>{product.price}</p>
        <div className={styles.heartContainer}>
          <img src={heart} alt="좋아요 아이콘" />
          <span className={styles.heartCount}>{product.favoriteCount}</span>
        </div>
      </div>
    </button>
  );
};

export default ProductItem;
