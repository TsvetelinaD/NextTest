import styled from "styled-components";
import { StyledSectionContainer } from "../../components/Containers/SectionContainer/elements";

export const ButtonsSectionContainer = styled(({ topMargin = 0, bottomMargin = 0, ...props }) => <StyledSectionContainer{...props} />)`
    display: inline-block; 
    margin-left:5%;
`;
