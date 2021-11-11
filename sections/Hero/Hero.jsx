import Image from "next/image";
import { Card } from "../../collections/Card/Card";

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledCTAContainer,
  StyledGetStartedBtn,
  StyledImageContainer,
} from "./elements";

export const Hero = ({ image, title, description, ctaText, ...props }) => {

  return (
    <>
      <StyledContainer {...props}>
        <StyledTextContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
          {/* <StyledCTAContainer>
            <StyledGetStartedBtn>{ctaText}</StyledGetStartedBtn>
          </StyledCTAContainer> */}
        </StyledTextContainer>
      </StyledContainer>

      <StyledImageContainer>
        <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
      </StyledImageContainer>

      <Card />
    </>
  );
};
