import { Button } from "../../components/Button/Button";
import { ButtonsSectionContainer } from "./elements";

const buttonProps = [
    {
        image: { src: "/img/brief.PNG", alt: "brief" },
        title: "Brief",
        description: "Complete brief writing or simple guidance on what to include, we've got you covered.",
    },
    {
        image: { src: "/img/search.PNG", alt: "search" },
        title: "Search",
        description: "In-depth agency search covering; criteria matching, door knocking and due-diligence vetting.",
    },
    {
        image: { src: "/img/pitch.PNG", alt: "pitch" },
        title: "Pitch",
        description: "Comprehensive pitch management, including comms, diary management and pitch hosting.",
    },
];

export const Buttons = () => {
    return (
        <ButtonsSectionContainer>
            {buttonProps.map((props, index) => <Button {...props} key={index} />)}
        </ButtonsSectionContainer >
    )
};
