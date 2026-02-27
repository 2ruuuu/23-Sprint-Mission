import styled from 'styled-components';
import plusIcon from '../assets/plus.svg';
import ImgBox from './ImgBox';

const ImageRegistration = ({
  name,
  handleImageRegis,
  preview,
  handleImageDelete,
  handleErrorMessage,
}) => {
  return (
    <Container>
      <Label htmlFor="imageRegist">
        <img src={plusIcon} alt="이미지 추가 아이콘" />
        <P>이미지 등록</P>
      </Label>
      <HiddenInput
        id="imageRegist"
        name={name}
        type="file"
        onChange={handleImageRegis}
        onClick={handleErrorMessage}
      />
      <ImgBox preview={preview} handleImageDelete={handleImageDelete} />
    </Container>
  );
};

export default ImageRegistration;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 1199px) {
    gap: 10px;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary-100);
  width: 282px;
  height: 282px;
  border-radius: 12px;
  cursor: pointer;

  @media (max-width: 1199px) {
    width: 168px;
    height: 168px;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const P = styled.p`
  font-weight: 400;
  line-height: 26px;
  color: var(--coolGray-400);
`;
