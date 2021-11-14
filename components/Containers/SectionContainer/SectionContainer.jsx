import { StyledSectionContainer } from "./elements";
import { Card } from "../../../collections/Card/Card";
import Image from "next/image";
import { StyledImageContainer } from "../../../sections/Hero/elements";

export const SectionContainer = (image) => {

  return (

    <StyledSectionContainer>
      <StyledImageContainer>
        <Image layout="responsive" src={image.img.src} alt={image.img.alt} width={image.img.width} height={image.img.height} />
      </StyledImageContainer>

      <Card />
      
    </StyledSectionContainer>
  );
};
