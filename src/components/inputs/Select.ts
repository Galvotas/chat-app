import styled from "styled-components";
import { Colors } from "../../styles/colors";

interface ISelect {
  background?: string;
}

export const Select = styled.select<ISelect>`
  background-color: ${({ background }) =>
    background || `${Colors.SecondaryLight}`};
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 0.5rem;
  font-size: 0.7rem;
  color: ${Colors.Neutral};
  font-weight: 700;

  > option {
    background-color: ${({ background }) =>
      background || `${Colors.SecondaryLight}`};
    color: red;
  }
`;
