import styled from "styled-components";

export const ButtonsSectionContainer = styled(({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />)`
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    @media (max-width: 800px) {
        align-self: center;
        width: 70%;
    }
`;
