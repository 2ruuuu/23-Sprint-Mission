import styled from 'styled-components';

const Button = ({ children, type = 'button', isActive = false, onClick }) => {
  return (
    <ButtonS type={type} $isActive={isActive} onClick={onClick}>
      {children}
    </ButtonS>
  );
};

export default Button;

const ButtonS = styled.button`
  background-color: ${({ $isActive }) =>
    $isActive ? 'var(--primary-100)' : 'var(--coolGray-400)'};
  color: var(--coolGray-100);
  padding: 12px 23px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background-color: ${({ $isActive }) =>
      $isActive ? 'var(--primary-200)' : ''};
  }
`;
