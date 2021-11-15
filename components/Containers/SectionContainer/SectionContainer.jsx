import { StyledSectionContainer, StyledSectionContainerBackground } from "./elements";
import { Buttons } from "../../../collections/Buttons";
import Image from "next/image";
import { StyledImageContainer } from "../../../sections/Hero/elements";

export const SectionContainer = (image) => {
  return (
    <StyledSectionContainer>
      <StyledSectionContainerBackground>
        <StyledImageContainer>
          <Image layout="responsive" src={image.img.src} alt={image.img.alt} width={image.img.width} height={image.img.height} />
        </StyledImageContainer>
      </StyledSectionContainerBackground>
      <Buttons />
    </StyledSectionContainer>
  );
};
