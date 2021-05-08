import styled from "styled-components";
import { Colors } from "../../styles/colors";
import { Spacing } from "../../types";

export const IconButton = styled.button<Spacing>`
  border: none;
  background-color: ${Colors.PrimaryLight};
  color: ${Colors.Dark};
  padding: ${({ padding }) => padding || "1rem"};
  border-radius: 0.5em;
  cursor: pointer;
  padding-top: ${({ pt }) => `${pt}`};
  padding-right: ${({ pr }) => `${pr}`};
  padding-bottom: ${({ pb }) => `${pb}`};
  padding-left: ${({ pl }) => `${pl}`};
  margin-top: ${({ mt }) => `${mt}`};
  margin-right: ${({ mr }) => `${mr}`};
  margin-bottom: ${({ mb }) => `${mb}`};
  margin-left: ${({ ml }) => `${ml}`};
  width: ${({ width }) => `${width}`};
`;
