export interface IProps {
    label: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
    required?: boolean;
    type: React.HTMLInputTypeAttribute;
    value: string | number;
}
