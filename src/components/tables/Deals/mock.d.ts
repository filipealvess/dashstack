export interface IProduct {
    amount: string;
    date: string;
    id: number;
    location: string;
    name: string;
    piece: number;
    src: string;
    status: Status;
}

export type Status = "delivered" | "pending" | "rejected";
