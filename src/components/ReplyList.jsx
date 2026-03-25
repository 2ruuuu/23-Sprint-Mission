import Reply from './Reply';
import styled from 'styled-components';
import emptyImg from '../assets/empty.svg';

const ReplyList = ({ commentData, handleDelete, handlePatch }) => {
  return (
    <Container>
      {commentData.length === 0 ? (
        <Empty>
          <Img src={emptyImg} alt="댓글이 없음" />
        </Empty>
      ) : (
        commentData.map((item) => (
          <Reply
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handlePatch={handlePatch}
          />
        ))
      )}
    </Container>
  );
};

export default ReplyList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 16px;
`;

const Empty = styled.div`
  margin: 0 auto;
`;

const Img = styled.img``;
