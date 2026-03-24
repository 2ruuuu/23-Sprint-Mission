import axiosInstance from './axiosInstance';

export const getProductComments = async ({ productId, limit = 10, cursor }) => {
  try {
    const response = await axiosInstance.get(
      `/products/${productId}/comments`,
      {
        params: {
          limit,
          cursor,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('댓글을 가져오지 못했습니다.', error);
    throw error;
  }
};

export const postProductComments = async ({ productId, content }) => {
  try {
    const response = await axiosInstance.post(
      `/products/${productId}/comments`,
      { content }
    );
    return response.data;
  } catch (error) {
    console.error('댓글 등록에 실패했습니다.', error);
    throw error;
  }
};

export const patchProductComments = async ({ commentId, content }) => {
  try {
    const response = await axiosInstance.patch(`/comments/${commentId}`, {
      content,
    });
    return response.data;
  } catch (error) {
    console.error('댓글 수정에 실패했습니다.', error);
    throw error;
  }
};

export const deleteProductComments = async (commentId) => {
  try {
    const response = await axiosInstance.delete(`/comments/${commentId}`);
    return response.data;
  } catch (error) {
    console.error('댓글 삭제에 실패했습니다.', error);
    throw error;
  }
};
