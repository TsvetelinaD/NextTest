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
  align-items: center;
  text-align: left;
  // align-self: center;  
  // justify-content: center;
  border-radius: 7px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  min-width: 300px;
  min-height: 56px;
  max-width: 500px;
  cursor: pointer;
  border: none;
  color: black;
  margin: 3%;
  &:hover {
    border: 2px solid ${({ theme }) => theme.main};
  }
  ${({ variant }) => buttonVariants[variant]}
`;

export const StyledButtonText = styled((props) => <SectionInnerHeading {...props} />)`
  margin-left: 2rem;
  margin-top: 0.1rem;
  margin-bottom: auto;
`;

export const StyledHeadingText = styled((props) => <span {...props} />)`
font-family: Poppins;
  font-size: 1.20rem;
  font-weight: 450;
  margin-left: 2rem;
  &:hover {
    color: ${({ theme }) => theme.main};
    text-decoration: underline;
  }
`;

export const ButtonContainer = styled(({ color = "primary", ...props }) => <span {...props} />)`
  font-family: sans-serif;
  // vertical-align: middle;
  padding: 0.5rem;
  display: block;
  overflow: hidden;
  cursor: pointer;
`;

export const ButtonImageContainer = styled(({ color = "primary", ...props }) => <span {...props} />)`
  overflow: hidden;
  display: inline-block;
  align-self: center;  
  text-align:center;
  cursor: pointer;
  width: 20%;
  margin-top: 0.5rem;

`;

export const ButtonTextContainer = styled(({ color = "primary", ...props }) => <span {...props} />)`
  overflow: hidden;
  display: inline-block;
  cursor: pointer;
  width: 80%;
  // align-items: flex-start;
`;
