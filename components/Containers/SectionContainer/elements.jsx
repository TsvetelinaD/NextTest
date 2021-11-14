import styled from "styled-components";

export const StyledSectionContainer = styled(({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />)`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 5rem;
`;