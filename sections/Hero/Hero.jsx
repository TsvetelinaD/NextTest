import { SectionContainer } from "../../components/Containers/SectionContainer/SectionContainer";

import {
  StyledTextContainer,
  StyledTitle,
  StyledDescription,
} from "./elements";

export const Hero = ({ image, title, description, ctaText, ...props }) => {
  return (
    <>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <SectionContainer img={image}></SectionContainer>
    </>
  );
};
