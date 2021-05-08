import styled from "styled-components";
import { Spacing } from "../../types";

interface IBox extends Spacing{
  justify?: string;
align?: string;
}

export const Box = styled.div<IBox>`
display:flex;
justify-content: ${({justify}) => justify};
align-items: ${({align}) => align};
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