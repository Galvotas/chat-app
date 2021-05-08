import styled from 'styled-components';
import logoImage from '../../assets/chatting.png'
import { H3, Text } from '../texts';
import { Box } from '../wrappers/Box';


interface ILogoContainer {
    width?: string,
    height?: string
}


export const LogoContainer = styled.div<ILogoContainer>`
width: ${({width}) => width || '2rem'};
height: ${({height}) => height || '2rem'};
margin-bottom: 3rem;
`


export const AuthHeader = ({title, message}: {title: string, message: string}) => {
    return (
        <>
        <LogoContainer>
            <img src={logoImage} alt='img' style={{width: '100%'}}/>
        </LogoContainer>
        <Box mb="0.4rem">
            <H3>{title}</H3>
        </Box>
        <Box mb="2rem">
        <Text>{message}</Text>
        </Box>
        </>
    )
}