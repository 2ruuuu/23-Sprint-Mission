import styled from 'styled-components';

const Tag = ({ children }) => {
  return <Container>#{children}</Container>;
};

export default Tag;

const Container = styled.div`
  padding: 6px 16px;
  background-color: var(--coolGray-100);
  border-radius: 26px;
  font-weight: 400;
  color: var(--secondary-800);
`;
