export interface IProps {
    children: React.JSX.Element | React.JSX.Element[];
    onClick?: () => void;
    paths?: string[];
    route: string;
}
