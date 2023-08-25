import { useSelector } from "react-redux";
import { Card } from "../../styles/styles";
import UserItem from "../../components/userItem/userItem";
import styled from "styled-components";

const UserDataElements = styled.div`
  display: grid;
  grid-template-columns: ${({ count }) => {
    const columnStyles = {
      1: "1fr",
      2: "1fr 1fr",
    };
    return columnStyles[count] || "1fr 1fr 1fr";
  }};
`;

function UsersContent() {
  const data = useSelector((state) => state.data);

  const count = data.items ? data.items.length : 0;

  if (!data.items) {
    return <div></div>;
  }

  return (
    <UserDataElements count={count}>
      {data.items.map((user) => (
        <Card key={user.id}>
          <UserItem user={user.login} photo={user.avatar_url} url={user.url} />
        </Card>
      ))}
    </UserDataElements>
  );
}
export default UsersContent;
