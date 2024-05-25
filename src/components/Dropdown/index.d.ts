export interface IItem {
    description?: string;
    id: string;
    title: string;
}

export interface IProps {
    footer?: React.ReactNode;
    items: IItem[];
    onClick?: (id: string) => void;
    selected?: string;
    title?: string;
    visible: boolean;
}
