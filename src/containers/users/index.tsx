import styled from "styled-components";
import { useState } from "react";
import { Colors } from "../../styles/colors";
import { H3 } from "../../components/texts";
import { users } from "../../mocks/users";
import { Box } from "../../components/wrappers/Box";
import { Select } from "../../components/inputs/Select";
import { TextField } from "../../components/inputs/TextField";
import { Divider } from "../../components/others/Divider";
import { UsersHeader } from "./UsersHeader";
import { RecentUsers } from "./RecentUsers";
import { SelectedUserAvatar } from "../../components/shared/Avatar";

export const UsersContainer = () => {
  const [isUserShown, setUserShown] = useState(true);

  return (
    <UsersBlock>
      <UsersHeader isUserShown={isUserShown} setUserShown={setUserShown} />
      <Divider background={Colors.PrimaryLight} />
      {isUserShown && (
        <SelectedUser>
          <SelectedUserAvatar img={users[0].img}>
            <AvatarStatusIndicator />
          </SelectedUserAvatar>
          <SelectedUserName>{users[0].name}</SelectedUserName>
          <Box mt="1rem" mb="1rem">
            <Select>
              {users[0].statusOptions.map((opt) => (
                <option value="@">{opt}</option>
              ))}
            </Select>
          </Box>
          <TextField placeholder="Search user" />
        </SelectedUser>
      )}
      <RecentUsers />
    </UsersBlock>
  );
};

const SelectedUser = styled.div`
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectedUserName = styled(H3)``;

interface IUsersContainer {
  minWidth?: string;
}

const UsersBlock = styled.div<IUsersContainer>`
  min-width: ${({ minWidth }) => minWidth || "20vw"};
  overflow: hidden;
  padding-right: 1rem;
  transition: all 1s ease;
`;

export const AvatarStatusIndicator = styled.div`
  position: absolute;
  content: "";
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${Colors.SecondaryLight};
  right: 0;
  bottom: 0;
  transform: translate(-50%, -210%);
`;
