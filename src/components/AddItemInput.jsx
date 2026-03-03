import styled from 'styled-components';
import Tag from './Tag';

const AddItemInput = ({
  children,
  height = 'short',
  placeholder,
  handleTagAdd,
  tag,
  handleTagDelete,
  name,
  value,
  onChange,
}) => {
  const isLong = height === 'long';
  const tagInput = children === '태그';

  return (
    <InputContainer>
      <Label>{children}</Label>
      <Input
        name={name}
        as={isLong ? 'textarea' : 'input'}
        $height={height}
        placeholder={placeholder}
        onKeyDown={tagInput ? handleTagAdd : null}
        value={value}
        onChange={onChange}
      />
      {tagInput ? (
        <TagContainer>
          {tag.map((title) => (
            <Tag key={title} handleTagDelete={handleTagDelete} tag={tag}>
              {title}
            </Tag>
          ))}
        </TagContainer>
      ) : null}
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
  height: ${({ $height }) => ($height === 'long' ? '282px' : '56px')};
  outline: none;

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
