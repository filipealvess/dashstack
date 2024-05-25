export interface IItem {
    description?: string;
    id: string;
    title: string;
}

export interface IProps {
    footer?: React.ReactNode;
    items: IItem[];
    title?: string;
    visible: boolean;
}
