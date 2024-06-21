export interface IProps {
    danger?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    styles?: React.CSSProperties;
    text: string;
    type?: Types;
}

export type Types = "primary" | "secondary";
