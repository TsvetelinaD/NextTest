import styled from "styled-components";
import { Button, SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  font-size: 1.7rem;
  margin-bottom: 0;
  align-items: center;
  color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  font-size: 0.9rem;
  margin: 0;
  font-weight: 400;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  margin-top: 45px;
  margin-bottom: 35px;
  text-align: center;
  font-family: sans-serif;
  @media (max-width: 800px) {
    margin-top: 0;
  }
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  width: 60%;
  @media (max-width: 800px) {
    width: 45%; 
  }
`;
