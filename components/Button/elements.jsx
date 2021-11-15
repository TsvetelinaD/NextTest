import styled, { css } from "styled-components";

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
  border-radius: 7px;
  cursor: pointer;
  border: none;
  margin: 2px;
  &:hover {
    margin: 0;
    border: 2px solid ${({ theme }) => theme.main};
  }
  ${({ variant }) => buttonVariants[variant]}
`;

export const StyledButtonText = styled((props) => <div {...props} />)`
  font-size: 12px;
`;

export const StyledHeadingText = styled((props) => <span {...props} />)`
  font-family: Poppins;
  line-height: 1.5;
  font-size: 14px;
  font-weight: 600;
`;

export const ButtonContainer = styled(({ color = "primary", ...props }) => <div {...props} />)`
  font-family: sans-serif;
  padding: 15px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;

  &:hover ${StyledHeadingText} {
    color: ${({ theme }) => theme.main};
    text-decoration: underline;
  }
`;

export const ButtonTextContainer = styled(({ color = "primary", ...props }) => <span {...props} />)`
  overflow: hidden;
  display: inline-block;
  cursor: pointer;
  text-align:left;
`;
