import axiosInstance from "./axiosInstance";

export const getProducts = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) => {
  const response = await axiosInstance.get("/products", {
    params: {
      page,
      pageSize,
      orderBy,
      keyword,
    },
  });

  return response.data;
};
