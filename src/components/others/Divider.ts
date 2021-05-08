import styled from "styled-components";
import { Colors } from "../../styles/colors";

interface IDivider {
  background?: string;
}

export const Divider = styled.div<IDivider>`
  height: 1px;
  background-color: ${({ background }) => background || Colors.PrimaryDark};
`;
