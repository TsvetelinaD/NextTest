import styled, { css } from "styled-components";
import { SectionInnerHeading, StyledSectionSubheading } from "~/components";

const outlinedVariantButton = css`
  background-color: transparent;
  border: 1px solid;
  border-color: ${({ theme, color }) => theme[color]};
  color: ${({ theme, color }) => theme[color]};

  &:hover {
    border-color: ${({ theme }) => theme.main};
    background-color: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.white};
  }
`;

const containedVariantButton = css`
  background-color: ${({ theme, color }) => theme[color]};

  &:hover {
    background-color: ${({ theme, color }) => theme.hover[color]};
  }
`;

const textVariantButton = css`
  background-color: transparent;
  border: none;
  border-radius: 0;
  min-width: unset;
  padding: 0 2rem;
  margin: 0 2rem;
  color: ${({ theme, color }) => theme[color]};

  &:hover {
    color: ${({ theme }) => theme.black};
    border-bottom: 1px solid ${({ theme }) => theme.black};
  }
`;

const buttonVariants = {
  outlined: outlinedVariantButton,
  contained: containedVariantButton,
  text: textVariantButton,
};

export const StyledButton = styled(({ color = "primary", variant = "contained", ...props }) => <button {...props} />)`
  font-family: sans-serif;
  overflow: hidden;
  text-align: left;
  align-self: center;  
  justify-content: center;
  border-radius: 7px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  min-width: 300px;
  min-height: 56px;
  cursor: pointer;
  border: none;
  color: black;
  &:hover {
    border: 2px solid ${({ theme }) => theme.main};
  }
  ${({ variant }) => buttonVariants[variant]}
`;

export const StyledButtonText = styled((props) => <SectionInnerHeading {...props} />)`
margin: 2px;
`;

export const StyledHeadingText = styled((props) => <span {...props} />)`
font-family: Poppins;
  font-size: 1.25rem;
  line-height: 1.875rem;
  font-weight: 300;
`;

export const ButtonContainer = styled(({ color = "primary", ...props }) => <span {...props} />)`
  font-family: sans-serif;
  display: block;
  overflow: hidden;
  cursor: pointer;
`;

export const ButtonImageContainer = styled(({ color = "primary", ...props }) => <span {...props} />)`
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  align-self: center;  
  text-align:center;
  cursor: pointer;
  width: 40%
`;

export const ButtonTextContainer = styled(({ color = "primary", ...props }) => <span {...props} />)`
  overflow: hidden;
  display: inline-block;
  justify-content: center;
  cursor: pointer;
  width: 60%;
`;