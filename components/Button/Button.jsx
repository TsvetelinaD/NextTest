import { StyledButton, StyledButtonText, ButtonContainer, ButtonTextContainer, StyledHeadingText } from "./elements";
import Image from "next/image";

export const Button = ({ ...buttonProps }) => {
  return (
    <StyledButton>
      <ButtonContainer>
        <Image src={buttonProps.image.src} alt={buttonProps.image.alt} width={140} height={140} />
        <ButtonTextContainer>
          <StyledHeadingText>{buttonProps.title}</StyledHeadingText>
          <StyledButtonText>{buttonProps.description}</StyledButtonText>
        </ButtonTextContainer>
      </ButtonContainer>
    </StyledButton>
  );
};
