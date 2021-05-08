import styled from "styled-components";
import { users } from "../../mocks/users";
import { Text, H4 } from "../../components/texts";
import { SelectedUserAvatar } from "../../components/shared/Avatar";

export const RecentUsers: React.FC = () => {
  return (
    <RecentUsersContainer>
      <RecetUsersHeader>
        <Text>Recent users</Text>
        <span></span>
      </RecetUsersHeader>
      <RecentUsersList>
        {users.map((user) => {
          return (
            <RecentUserContainer>
              <RecentUserPersonalia>
                <RecentUserSmallAvatar img={user.img} />
                <RecentUserFullName>{user.name}</RecentUserFullName>
              </RecentUserPersonalia>
              <Text>{user.timestamp}</Text>
            </RecentUserContainer>
          );
        })}
      </RecentUsersList>
    </RecentUsersContainer>
  );
};

const RecentUsersContainer = styled.div`
  position: relative;
  padding: 1rem 1rem 0 0;
  height: 30rem;
  overflow-y: scroll;
`;

const RecetUsersHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const RecentUsersList = styled.ul`
  list-style: none;
  padding-top: 2rem;
`;

const RecentUserContainer = styled.li`
  display: flex;
  justify-content: space-between;
  min-width: 10rem;
`;

const RecentUserPersonalia = styled.div`
  display: flex;
`;

const RecentUserFullName = styled(H4)`
  margin-left: 1rem;
`;

const RecentUserSmallAvatar = styled(SelectedUserAvatar)`
  width: 4rem;
  height: 4rem;
`;
