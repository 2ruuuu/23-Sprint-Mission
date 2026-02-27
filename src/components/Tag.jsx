import styled from 'styled-components';
import deleteImg from '../assets/delete.svg';

const Tag = ({ children, handleTagDelete }) => {
  return (
    <Container>
      <Text>#{children}</Text>
      <button type="button" onClick={() => handleTagDelete(children)}>
        <img src={deleteImg} alt="태그 삭제 버튼" />
      </button>
    </Container>
  );
};

export default Tag;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  gap: 8px;
  height: 36px;
  background-color: var(--coolGray-100);
  padding: 6px 12px;
  border-radius: 26px;
`;

const Text = styled.p`
  line-height: 26px;
  font-weight: 400;
  color: var(--secondary-800);
`;
