import "./textarea.css";

export type TextareaProps = {
    placeholder?: string;
    children?: string;
}

export function Textarea({ placeholder, children }: TextareaProps) {
    return <textarea className="textarea" placeholder={placeholder} defaultValue={children} />;
}