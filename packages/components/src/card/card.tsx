import { Badge } from "../badge";
import { Button } from "../button";
import { Icon } from "../icon";
import "./card.css";

export function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="card">
            {children}
            <div className="card-character">
                <div className="card-character-badges">
                    {/* <Badge>🔥&nbsp;&nbsp;Character Type</Badge> */}
                    <Icon type="untitledui" name="Heart" size="sm" inline />
                </div>
                <div className="card-character-info">
                    <h2>Character Name</h2>
                    <p className="truncate-multiline">Excepteur laboris do occaecat qui duis ex ut ipsum mollit deserunt sint elit incididunt. Dolore dolor nisi esse culpa duis do officia cupidatat reprehenderit cupidatat ea amet eiusmod ea elit. Excepteur excepteur non nostrud elit id consectetur voluptate officia deserunt consequat commodo enim esse. Irure aute aliqua deserunt quis non nisi. Reprehenderit consectetur irure dolor nisi voluptate culpa nostrud officia duis officia aute excepteur occaecat. Do excepteur minim minim irure qui enim ex ad mollit amet adipisicing commodo. Proident exercitation officia aute ullamco. Aute excepteur et consequat dolore proident amet laboris.</p>
                </div>
                <div className="card-character-action">
                    <Button>View Character</Button>
                </div>
            </div>
        </div>
    );
}

export function CardThumbnail({ children }: { children: React.ReactNode }) {
    return <div className="card-thumbnail">{children}</div>;
}

export function CardHeader({ children }: { children: React.ReactNode }) {
    return <div className="card-header">{children}</div>;
}

export function CardBody({ children }: { children: React.ReactNode }) {
    return <div className="card-body">{children}</div>;
}

export function CardFooter({ children }: { children: React.ReactNode }) {
    return <div className="card-footer">{children}</div>;
}