import { Textarea } from "../textarea";
import "./prompt.css";

export type PromptProps = {
    placeholder?: string;
}

export function Prompt({ placeholder }: PromptProps) {
    return (
        <div className="prompt">
            <Textarea placeholder={placeholder} />
        </div>
    )
}