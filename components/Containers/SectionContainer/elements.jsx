import styled from "styled-components";

export const StyledSectionContainer = styled(({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />)`
  display: flex;
  gap: 30px 30px;
  margin-bottom: 40px;
  @media (max-width: 800px) {
      flex-direction: column;
  }
`;

export const StyledSectionContainerBackground = styled(({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />)`
  background: no-repeat url("img/background.png");
  background-size: auto 100%;
  display: flex;
  justify-content: flex-end;
  width: 50%;
  @media (max-width: 800px) {
    width: 100%;
    justify-content: center;
  }
`;
