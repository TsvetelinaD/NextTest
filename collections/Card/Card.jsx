import { Button } from "../../components/Button/Button";
import { ButtonsSectionContainer } from "./elements";

const buttonProps = {
    firstButton: {
        image: { src: "/img/brief.PNG", alt: "brief", width: 100, height: 100 },
        title: "Brief",
        description: "Complete brief writing or simple guidance on what to include, we've got you covered.",
    },
    secondButton: {
        image: { src: "/img/search.PNG", alt: "search", width: 100, height: 100 },
        title: "Search",
        description: "In-depth agency search covering; criteria matching, door knocking and due-diligence vetting.",
    },
    thirdButton: {
        image: { src: "/img/pitch.PNG", alt: "pitch", width: 100, height: 100 },
        title: "Pitch",
        description: "Comprehensive pitch management, including comms, diary management and pitch hosting.",
    },
};

export const Card = () => {
    return (
        <ButtonsSectionContainer>
            <Button {...buttonProps.firstButton}></Button>
            <Button {...buttonProps.secondButton}></Button>
            <Button {...buttonProps.thirdButton}></Button>
        </ButtonsSectionContainer>
    )
}
