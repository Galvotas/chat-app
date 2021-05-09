import React from "react";
import styled from "styled-components";
import { Globe } from "../containers/globe";
import backgroundDark from "../assets/black_background.png";
import { H1, Text } from "../components/texts";
import { Colors } from "../styles/colors";
import { PrimaryBtn } from "../components/buttons/PrimaryBtn";
import { useHistory } from "react-router";

const LandingWrapper = styled.div`
  width: 100vw;
  display: flex;
`;
const GlobeWrapper = styled.div`
  flex: 3;
  background: #000;
`;

const LandingMessageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 3rem;
  background: #000;
  color: ${Colors.Neutral};
`;

const LandingMessageTitle = styled(H1)`
  font-weight: 700;
  font-size: 10rem;
  margin-bottom: 3rem;
`;

const LandingProjectDescription = styled(Text)`
  font-size: 1rem;
  color: ${Colors.Neutral};
`;

const HeroButton = styled(PrimaryBtn)`
  margin-top: 2rem;
  color: ${Colors.Neutral};
  width: 100%;
  font-size: 0.9rem;
  border: 1px solid ${Colors.Neutral};
`;

export const HomePage = () => {
  const history = useHistory();
  return (
    <LandingWrapper>
      <LandingMessageContainer>
        <LandingMessageTitle>Hello.</LandingMessageTitle>
        <LandingProjectDescription>
          Communicating is exciting. It's our nature. <br /> We make it easy
          communicating with a whole world.
        </LandingProjectDescription>
        <HeroButton onClick={() => history.push("/signin")}>
          Start messaging
        </HeroButton>
      </LandingMessageContainer>
      <GlobeWrapper>
        <Globe />
      </GlobeWrapper>
    </LandingWrapper>
  );
};
