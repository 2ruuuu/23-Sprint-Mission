import styled from 'styled-components';
import deleteImg from '../assets/Delete.svg';

const ImgBox = ({ preview, handleImageDelete }) => {
  if (!preview) {
    return null;
  }

  return (
    <Container>
      <Button onClick={handleImageDelete}>
        <img src={deleteImg} />
      </Button>
      <Image src={preview} />
    </Container>
  );
};

export default ImgBox;

const Container = styled.div`
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  top: 12px;
  left: 248px;

  @media (max-width: 1199px) {
    left: 134px;
  }
`;

const Image = styled.img`
  width: 282px;
  height: 282px;
  border-radius: 12px;
  object-fit: cover;
  object-position: center;
  border: 1px solid var(--coolGray-50);

  @media (max-width: 1199px) {
    width: 168px;
    height: 168px;
  }
`;
