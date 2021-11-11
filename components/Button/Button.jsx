import { StyledButton, StyledButtonText, ButtonContainer, ButtonImageContainer, ButtonTextContainer, StyledHeadingText } from "./elements";

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <ButtonContainer>
        <ButtonImageContainer>img</ButtonImageContainer>

        <ButtonTextContainer>
          <StyledHeadingText>{children}</StyledHeadingText>
          <StyledButtonText>{children}</StyledButtonText>
        </ButtonTextContainer>

      </ButtonContainer>
    </StyledButton>
  );
};
