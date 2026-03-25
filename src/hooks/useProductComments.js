// src/hooks/useProductComments.js
import { useEffect, useState, useCallback } from 'react';
import {
  getProductComments,
  postProductComments,
  deleteProductComments,
  patchProductComments,
} from '../apis/comentApi';

const useProductComments = (productId) => {
  const [commentData, setCommentData] = useState([]);
  const [isCommentLoading, setIsCommentLoading] = useState(true);
  const [nextCursor, setNextCursor] = useState(null);
  const [value, setValue] = useState('');

  const fetchComments = useCallback(
    async (cursor = null) => {
      try {
        if (!cursor) setIsCommentLoading(true);
        const data = await getProductComments({ productId, limit: 5, cursor });
        setCommentData((prev) =>
          cursor ? [...prev, ...data.list] : data.list
        );
        setNextCursor(data.nextCursor);
      } catch (error) {
        console.error('댓글을 가져오는데 실패했습니다.', error);
      } finally {
        setIsCommentLoading(false);
      }
    },
    [productId]
  );

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value) return;
    try {
      await postProductComments({ productId, content: value });
      setValue('');
      await fetchComments();
    } catch (error) {
      console.error('댓글 작성을 실패했습니다.', error);
    }
  };

  const handleChange = (e) => setValue(e.target.value);

  const handleLoadMore = () => {
    if (nextCursor) fetchComments(nextCursor);
  };

  const handlePatch = async (e, commentId, content) => {
    e.preventDefault();
    try {
      await patchProductComments({ commentId, content });
      await fetchComments();
    } catch (error) {
      console.error('댓글 수정을 실패했습니다.', error);
    }
  };

  const handleDelete = async (commentId) => {
    try {
      await deleteProductComments(commentId);
      await fetchComments();
    } catch (error) {
      console.error('댓글 삭제에 실패했습니다.', error);
    }
  };

  return {
    commentData,
    isCommentLoading,
    value,
    handleSubmit,
    handleChange,
    handleLoadMore,
    handlePatch,
    handleDelete,
  };
};

export default useProductComments;
