import styled from 'styled-components';
import Tag from '../ProductDetail/Tag';

const TagList = ({ tags }) => {
  return (
    <Container>
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </Container>
  );
};

export default TagList;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
