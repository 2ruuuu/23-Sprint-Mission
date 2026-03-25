import { useMemo, useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import ImageRegistration from '../components/ImageRegistration';
import AddItemInput from '../components/AddItemInput';
import { BREAKPOINT } from '../util/breakpoint';

const AddItemPage = () => {
  const [file, setFile] = useState();
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const [tag, setTag] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const isActive = file && name && description && price;

  const preview = useMemo(() => {
    if (!file) return null;
    return URL.createObjectURL(file);
  }, [file]);

  //폼데이터 보내기
  const handleSubmit = (formData) => {
    const finalData = {
      images: file,
      tags: tag,
      price: Number(price),
      description,
      name,
    };

    console.log(finalData);
  };

  //이미지 등록
  const handleImageRegis = (e) => {
    setFile(e.target.files[0]);
  };

  //이미지 삭제
  const handleImageDelete = () => {
    setFile(null);
    setIsErrorMessage(false);
  };

  //에러 메시지 띄우기
  const handleErrorMessage = (e) => {
    if (file) {
      e.preventDefault();
      setIsErrorMessage(true);
    } else {
      setIsErrorMessage(false);
    }
  };

  // 태그 추가
  const handleTagAdd = (e) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      if (tag.includes(e.target.value)) {
        e.target.value = '';
        return;
      }
      setTag([...tag, e.target.value]);
      e.target.value = '';
    }
  };

  //태그 삭제
  const handleTagDelete = (targetTitle) => {
    setTag(tag.filter((title) => title !== targetTitle));
  };

  return (
    <Container action={handleSubmit}>
      <NavBar />
      <Header>
        <Title>상품 등록하기</Title>
        <Button isActive={isActive}>등록</Button>
      </Header>
      <main>
        <ProductImageContainer>
          <SemiTitle>상품 이미지</SemiTitle>
          <ImageRegistration
            handleImageRegis={handleImageRegis}
            preview={preview}
            handleImageDelete={handleImageDelete}
            handleErrorMessage={handleErrorMessage}
          />
          <ErrorMessage $isErrorMessage={isErrorMessage}>
            *이미지 등록은 최대 1개까지 가능합니다.
          </ErrorMessage>
        </ProductImageContainer>
        <AddItemInput
          label="상품명"
          height="short"
          placeholder="상품명을 입력해주세요"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <AddItemInput
          label="상품 소개"
          variant="textarea"
          height="long"
          placeholder="상품 소개를 입력해주세요"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <AddItemInput
          label="판매가격"
          height="short"
          placeholder="판매 가격을 입력해주세요"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <AddItemInput
          label="태그"
          isTag={true}
          height="short"
          placeholder="태그를 입력해주세요"
          handleTagAdd={handleTagAdd}
          tag={tag}
          handleTagDelete={handleTagDelete}
        />
      </main>
    </Container>
  );
};

export default AddItemPage;

//styled-components

const Container = styled.form`
  max-width: 1200px;
  margin: 94px auto;
  padding-right: 24px;
  padding-left: 24px;

  @media (max-width: ${BREAKPOINT.TABLET}) {
    min-width: 450px;
    padding-right: 14px;
    padding-left: 14px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  color: var(--secondary-800);
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
`;

const SemiTitle = styled.h2`
  color: var(--secondary-800);
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
`;

const ProductImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

const ErrorMessage = styled.p`
  display: ${({ $isErrorMessage }) => ($isErrorMessage ? '' : 'none')};
  font-weight: 400;
  line-height: 26px;
  color: var(--errorRed);
`;
