import type { IFill } from "@/components/charts/Sales/config.d";

const COLOR = "#4379EE";

const defs = [
    {
        colors: [
            {
                color: COLOR,
                offset: 0,
            },
            {
                color: COLOR,
                offset: 100,
                opacity: 0,
            },
        ],
        id: "gradient",
        type: "linearGradient",
    },
];

const fill: IFill[] = [
    {
        id: "gradient",
        match: "*",
    },
];

const margin = {
    bottom: 30,
    left: 40,
    right: 10,
    top: 20,
};

export default {
    COLOR,
    defs,
    fill,
    margin,
};
