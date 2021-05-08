import styled from 'styled-components';

interface ISelectedUserAvatar {
    img? : string
}

export const SelectedUserAvatar = styled.div<ISelectedUserAvatar>`
position: relative;
width: 6rem;
height: 6rem;
background-image: ${({img}) => `url(${img})`};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
border-radius: 3rem;
margin-bottom: 1rem; 
`