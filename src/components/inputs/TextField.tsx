import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'
import { Colors } from '../../styles/colors'

interface ITextFieldContainer {
    padding?: string;
    background?: string
}

const TextFieldContainer = styled.div<ITextFieldContainer>`
display:flex; 
justify-content: space-between;
align-items: center;
border-radius: 0.5rem;
width: 100%;
background: ${({background}) => background || Colors.NeutralLight};
padding: 0 1rem;
border: 1px solid ${Colors.PrimaryLight}
`

const Input = styled.input`
flex:1;
border: none;
background: none;
padding: 1rem 0;
outline: none;
::placeholder {
    opacity: 0.3;
}
`

const InputIcon = styled.button`
border: none;
background: none;
outline: none;
cursor: pointer;
`


export const TextField = ({placeholder, icon, background}: {placeholder?: string, icon?: JSX.Element, background?: string}) => {
    return (
        <TextFieldContainer background={background}>
            <Input placeholder={placeholder}/>
            <InputIcon>
            {icon ? icon : <AiOutlineSearch size={15}/>}
            </InputIcon>
        </TextFieldContainer>
    )
}


