// src/hooks/useProduct.js
import { useEffect, useState, useCallback } from 'react';
import {
  deleteProductFavorite,
  getOneProducts,
  postProductFavorite,
} from '../apis/productApi';

const useProduct = (productId) => {
  const [productData, setProductData] = useState(null);
  const [isProductLoading, setIsProductLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsProductLoading(true);
        const data = await getOneProducts(productId);
        setProductData(data);
      } catch (error) {
        console.error('데이터를 가져오지 못했습니다.', error);
      } finally {
        setIsProductLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleFavoriteButtonClick = async () => {
    if (!productData?.isFavorite) {
      try {
        const data = await postProductFavorite(productId);
        setProductData((prev) => ({
          ...prev,
          favoriteCount: data.favoriteCount,
          isFavorite: data.isFavorite,
        }));
      } catch (error) {
        console.error('좋아요 처리에 실패했습니다.', error);
      }
    } else {
      try {
        const data = await deleteProductFavorite(productId);
        setProductData((prev) => ({
          ...prev,
          favoriteCount: data.favoriteCount,
          isFavorite: data.isFavorite,
        }));
      } catch (error) {
        console.error('좋아요삭제 처리에 실패했습니다.', error);
      }
    }
  };

  return {
    productData,
    isProductLoading,
    handleFavoriteButtonClick,
  };
};

export default useProduct;
