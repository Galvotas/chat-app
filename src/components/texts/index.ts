import styled from 'styled-components'
import { Colors } from '../../styles/colors'

interface IText {
    fontSize?: string;
    color?: string
}

export const H1 = styled.h1`
font-size: 2.5rem;
font-weight: 500;
line-height: 3rem;
`

export const H2 = styled.h2`
font-size: 1.4rem;
font-weight: 500;
line-height: 2.5rem;
`

export const H3 = styled.h3`
font-size:1.5rem;
font-weight: 700;
line-height: 2rem;
`
export const H4 = styled.h4`
font-size:0.9rem;
font-weight: 500;
line-height: 1.7rem;
`

export const Text = styled.p<IText>`
font-size: ${({fontSize}) => fontSize || '14px'};
color: ${({color}) => color || Colors.DarkLight};
`

