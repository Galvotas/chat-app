import styled from 'styled-components'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
import { IconButton } from '../../components/buttons/IconButton'
import { H3 } from '../../components/texts'

interface IUsersState {
    isUserShown: boolean,
    setUserShown(arg1: boolean): void
}

export const UsersHeader: React.FC<IUsersState> = ({isUserShown, setUserShown}: IUsersState) => {
    return (
        <UsersContainerHeader>
        <IconButton mr='1rem' onClick={() => setUserShown(!isUserShown)}>
        {!isUserShown ? <MdKeyboardArrowDown/> : <MdKeyboardArrowUp/>}
        </IconButton>
        <H3>Users</H3>
    </UsersContainerHeader>
    )
}


export const UsersContainerHeader = styled.header`
display: flex;
align-items: center;
min-height: 10vh;
`