import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ItemsPage.module.css';
import NavBar from '../components/NavBar';
import BestProduct from '../components/BestProduct';
import AllProduct from '../components/AllProduct';
import Pagination from '../components/Pagination';
import Button from '../components/Button';
import DropDown from '../components/DropDown';
import SearchBar from '../components/SearchBar';
import { getProducts } from '../apis/productApi';

const ItemsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bestProducts, setBestProducts] = useState([]);
  const [isBestLoading, setIsBestLoading] = useState(false);
  const [productsSort, setProductsSort] = useState('recent');
  const [page, setPage] = useState(1);
  // const [pageSize, setPageSize] = useState(10);

  const handleProductsSort = (e) => {
    setProductsSort(e.target.value);
  };

  const handlePageClick = (page) => {
    setPage(page);
  };

  //1199px, 767px 때 새로 데이터 받아오기
  //하면될거 같은데 어떻게 하는지 잘 모르겠습니다.
  // useEffect(() => {

  // }, [])

  //베스트 상품
  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        setIsBestLoading(true);
        const data = await getProducts({ pageSize: 4, orderBy: 'favorite' });
        setBestProducts(data.list);
      } catch (error) {
        console.error(error);
      } finally {
        setIsBestLoading(false);
      }
    };

    fetchBestProducts();
  }, []);

  //전체 상품
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const data = await getProducts({
          page: page,
          pageSize: 10,
          orderBy: productsSort,
        });
        setProducts(data.list);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [productsSort, page]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className={styles.layout}>
        <h1 className={styles.hidden}>판다마켓 상품 목록</h1>
        {/* h2태그를 쓰기 위한 */}
        <h2 className={styles.bestTitle}>베스트 상품</h2>
        {!isBestLoading && <BestProduct bestProducts={bestProducts} />}
        <div className={styles.allProductHeader}>
          <div className={styles.allProductLeftSection}>
            <h2 className={styles.allProductTitle}>전체 상품</h2>
            <SearchBar />
          </div>
          <div className={styles.allProductRightSection}>
            <Link to="/additem">
              <Button isActive="true">상품 등록하기</Button>
            </Link>
            <DropDown handleProductsSort={handleProductsSort} />
          </div>
        </div>
        {!isLoading && <AllProduct products={products} />}
      </main>
      <footer className={styles.footer}>
        <Pagination handlePageClick={handlePageClick} page={page} />
      </footer>
    </>
  );
};

export default ItemsPage;
