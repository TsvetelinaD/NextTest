import { StyledButton, StyledButtonText, ButtonContainer, ButtonImageContainer, ButtonTextContainer, StyledHeadingText } from "./elements";
import Image from "next/image";

export const Button = ({ ...buttonProps }) => {
  return (
    
    <StyledButton >
      <ButtonContainer>
        <ButtonImageContainer>
          <Image src={buttonProps.image.src} alt={buttonProps.image.alt} width={buttonProps.image.width} height={buttonProps.image.height} />
        </ButtonImageContainer>

        <ButtonTextContainer>
          <StyledHeadingText>{buttonProps.title}</StyledHeadingText>
          <StyledButtonText>{buttonProps.description}</StyledButtonText>
        </ButtonTextContainer>

      </ButtonContainer>
    </StyledButton>
  );
};
