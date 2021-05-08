import styled from 'styled-components';

import { useState } from 'react'
import { UsersContainerHeader } from '../users/UsersHeader';
import { H3 } from '../../components/texts';
import { Divider } from '../../components/others/Divider';
import { Colors } from '../../styles/colors';
import { IconButton } from '../../components/buttons/IconButton';
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
import { Box } from '../../components/wrappers/Box';

export const ChannelsContainer = () => {
    const [isChannelsOpen, toggleChannelsState] = useState(true)

    return (
        <ChannelsWrapper>
            <ChannelsHeader>
            <IconButton mr='1rem' onClick={() => toggleChannelsState(!isChannelsOpen)}>
        {!isChannelsOpen ? <MdKeyboardArrowDown/> : <MdKeyboardArrowUp/>}
        </IconButton>
                <H3>Channels</H3>
            </ChannelsHeader>
            <Divider background={Colors.PrimaryLight}/>
           {isChannelsOpen &&  <Box pt="1rem">
            <ChannelsList>
                {channelsList.map(listItem => <ChannelsListItem># {listItem}</ChannelsListItem>)}
            </ChannelsList>
            </Box>}
        </ChannelsWrapper>
    )
}


const channelsList = ['general', 'random', 'crazy people']

const ChannelsWrapper = styled.div`
padding-left: 1rem;
flex: 0.5;
`

const ChannelsHeader = styled(UsersContainerHeader)`
`

const ChannelsList = styled.ul`
list-style: none;
`

const ChannelsListItem = styled.li`
padding-left: 1rem;
color: ${Colors.PrimaryDark};
opacity: 0.7;
transition: color 0.2s ease;
cursor: pointer;
:hover {
    color: ${Colors.PrimaryLight};
}
:not(:last-child) {
    margin-bottom: 0.2rem;
}
`
