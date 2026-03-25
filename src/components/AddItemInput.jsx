import styled from 'styled-components';
import Tag from './Tag';

const AddItemInput = ({
  className,
  label,
  isTag = false,
  placeholder,
  handleTagAdd,
  tag = [], //기본값 설정
  handleTagDelete,
  name,
  value,
  onChange,
  variant = 'input',
  height = 'short',
}) => {
  const isTextarea = variant === 'textarea';

  return (
    <InputContainer className={className}>
      <Label>{label}</Label>
      <Input
        name={name}
        as={isTextarea ? 'textarea' : 'input'}
        $height={height}
        $isTextarea={isTextarea}
        placeholder={placeholder}
        onKeyDown={isTag ? handleTagAdd : null}
        value={value}
        onChange={onChange}
      />
      {isTag && (
        <TagContainer>
          {tag.map((title) => (
            <Tag key={title} handleTagDelete={handleTagDelete} tag={tag}>
              {title}
            </Tag>
          ))}
        </TagContainer>
      )}
    </InputContainer>
  );
};

export default AddItemInput;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
`;

const Input = styled.input`
  border-radius: 12px;
  padding: 16px 24px;
  border: none;
  color: var(--secondary-800);
  background-color: var(--coolGray-100);
  outline: none;

  height: ${({ $height }) =>
    $height === 'long' ? '282px' : $height === 'medium' ? '104px' : '56px'};

  ${({ $isTextarea }) =>
    $isTextarea &&
    `
    display: block;
    resize: none;
    line-height: 1.5;
    vertical-align: top;
  `}

  &::placeholder {
    color: var(--secondary-400);
  }
`;
const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;
