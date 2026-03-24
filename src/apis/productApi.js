import axiosInstance from './axiosInstance';

export const getProducts = async ({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = '',
}) => {
  const response = await axiosInstance.get('/products', {
    params: {
      page,
      pageSize,
      orderBy,
      keyword,
    },
  });

  return response.data;
};

export const getOneProducts = async (productId) => {
  try {
    const response = await axiosInstance.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('개별 데이터를 가져오지 못했습니다.', error);
  }
};

export const postProductFavorite = async (productId) => {
  try {
    const response = await axiosInstance.post(
      `/products/${productId}/favorite`,
      {}
    );
    return response.data;
  } catch (error) {
    console.error('좋아요 등록을 실패했습니다.', error);
    throw error;
  }
};

export const deleteProductFavorite = async (productId) => {
  try {
    const response = await axiosInstance.delete(
      `/products/${productId}/favorite`,
      {}
    );
    return response.data;
  } catch (error) {
    console.error('좋아요 등록을 실패했습니다.', error);
    throw error;
  }
};
