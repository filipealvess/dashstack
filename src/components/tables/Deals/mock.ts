import type { IProduct } from "@/components/tables/Deals/mock.d";

const APPLE_WATCH = require("@/assets/images/apple-watch.png");

const products: IProduct[] = [
    {
        amount: "$34,295",
        date: "12.09.2019 - 12.53 PM",
        id: 0,
        location: "6096 Marjolaine Landing",
        name: "Apple Watch",
        piece: 423,
        src: APPLE_WATCH,
        status: "delivered",
    },
    {
        amount: "$34,295",
        date: "12.09.2019 - 12.53 PM",
        id: 1,
        location: "6096 Marjolaine Landing",
        name: "Apple Watch",
        piece: 423,
        src: APPLE_WATCH,
        status: "pending",
    },
    {
        amount: "$34,295",
        date: "12.09.2019 - 12.53 PM",
        id: 2,
        location: "6096 Marjolaine Landing",
        name: "Apple Watch",
        piece: 423,
        src: APPLE_WATCH,
        status: "rejected",
    },
];

export default products;
