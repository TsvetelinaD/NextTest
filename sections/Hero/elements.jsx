import styled from "styled-components";
import { Button, SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  align-items: center;
`;

export const StyledGetStartedBtn = styled((props) => <Button {...props} variant="contained" color="main" />)`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  font-size: 2rem;
  margin-top: 4rem;
  margin-bottom: 0;
  align-items: center;
  color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
  font-size: 1.07rem;
  margin: 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  text-align: center;
  font-family: sans-serif;
`;

// export const StyledCTAContainer = styled(({ ...props }) => <div {...props} />)`
//   display: flex;
// `;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 23rem;
  max-height: 80rem;
  width: 100%;
  height: 100%;
  margin-left: 10rem;
  margin-top: 1rem;
`;
