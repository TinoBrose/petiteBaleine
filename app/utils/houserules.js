import { MdSmokeFree, MdPets, MdVolumeOff, MdGroup } from "react-icons/md";

export const houserules = [
    {
        key: "pets",
        name: "Keine Haustiere erlaubt",
        icon: <MdPets />,
        tag: ["houserules"],
    },
    {
        key: "silence",
        name: "Ruhezeiten 23-7 h",
        icon: <MdVolumeOff />,
        tag: ["houserules"],
    },
    {
        key: "nosmoking",
        name: "Nichtraucher",
        icon: <MdSmokeFree />,
        tag: ["houserules"],
    },
    {
        key: "guests",
        name: "max. 2 Gäste",
        icon: <MdGroup />,
        tag: ["houserules"],
    },
    {
        key: "checkin",
        name: "Ankunft zwischen 16:00 Uhr und 20:00 Uhr",
        icon: undefined,
        tag: ["check"],
    },
    {
        key: "checkout",
        name: "Abreise vor 11:00 Uhr",
        icon: undefined,
        tag: ["check"],
    },




];
