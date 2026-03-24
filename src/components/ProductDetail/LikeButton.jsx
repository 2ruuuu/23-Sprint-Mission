import styled from 'styled-components';
import heart from '../../assets/heart.svg';

const LikeButton = ({ favoriteCount, onClick, isFavorite }) => {
  return (
    <Button type="button" onClick={onClick} $isFavorite={isFavorite}>
      <Image src={heart} alt="좋아요" />
      {favoriteCount}
    </Button>
  );
};

export default LikeButton;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  border-radius: 35px;
  border: 1px solid var(--secondary-200);
  background-color: ${({ $isFavorite }) =>
    $isFavorite ? 'var(--primary-100)' : '#ffffff'};
  font-weight: 500;
  line-height: 26px;
  color: ${({ $isFavorite }) =>
    $isFavorite ? '#ffffff' : 'var(--coolGray-500)'};
`;

const Image = styled.img`
  width: 26px;
  height: 26px;
`;
