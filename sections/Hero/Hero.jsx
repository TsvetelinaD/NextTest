// import Image from "next/image";
// import { Card } from "../../collections/Card/Card";
import { SectionContainer } from "../../components/Containers/SectionContainer/SectionContainer";

import {
  StyledTextContainer,
  StyledTitle,
  StyledDescription,
  StyledCTAContainer,
  StyledGetStartedBtn,
  StyledImageContainer,
} from "./elements";

export const Hero = ({ image, title, description, ctaText, ...props }) => {

  return (
    <>

      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        {/* <StyledCTAContainer>
            <StyledGetStartedBtn>{ctaText}</StyledGetStartedBtn>
          </StyledCTAContainer> */}
      </StyledTextContainer>

      <SectionContainer img={image}></SectionContainer>
    </>
  );
};
