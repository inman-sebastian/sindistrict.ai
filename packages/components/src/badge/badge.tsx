import { Icon } from "../icon";
import "./badge.css";

export type BadgeProps = {
    type?: "hashtag"
    children: React.ReactNode;
}

export function Badge({ type, children }: BadgeProps) {
    return (
        <span className="badge">
            {type === "hashtag" && <Icon type="untitledui" name="Hash01" size="sm" inline={true} className="text-slate-400" />}
            {children}
        </span>
    );
}