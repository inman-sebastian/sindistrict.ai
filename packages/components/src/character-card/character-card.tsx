import { Card } from "../card";
import { Icon } from "../icon";
import { Button } from "../button";
import { Image } from "../image";

import "./character-card.css";

export type CharacterCardProps = {
    portraitImage: string;
    className?: string;
    children?: React.ReactNode;
}

export function CharacterCard({ portraitImage, className, children }: CharacterCardProps) {
    return (
        <Card className="character-card">
            <div className="character-card-content">
                <div className="character-card-badges">
                    
                </div>
                <div className="character-card-info">
                    <div className="character-card-info-name">
                        <Icon library="fontawesome" style="solid" name="Venus" size="lg" />
                        <h2>Character Name</h2>
                    </div>
                    <p className="truncate-multiline">Excepteur laboris do occaecat qui duis ex ut ipsum mollit deserunt sint elit incididunt. Dolore dolor nisi esse culpa duis do officia cupidatat reprehenderit cupidatat ea amet eiusmod ea elit. Excepteur excepteur non nostrud elit id consectetur voluptate officia deserunt consequat commodo enim esse. Irure aute aliqua deserunt quis non nisi. Reprehenderit consectetur irure dolor nisi voluptate culpa nostrud officia duis officia aute excepteur occaecat. Do excepteur minim minim irure qui enim ex ad mollit amet adipisicing commodo. Proident exercitation officia aute ullamco. Aute excepteur et consequat dolore proident amet laboris.</p>
                </div>
                <div className="character-card-action">
                    <Button>View Character</Button>
                </div>
            </div>
            <Image src={portraitImage} />
        </Card>
    );
}