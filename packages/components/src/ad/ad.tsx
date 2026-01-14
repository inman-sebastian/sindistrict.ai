import { cn } from "@packages/utils";
import { useEffect, useMemo, useState } from "react";
import "./ad.css";

type SingleAdProps = {
    zoneid: string;
}

type MultiAdProps = {
    zoneids: string[];
}

export type AdProps = (SingleAdProps | MultiAdProps) & {
    format?: "leaderboard" | "rectangle" | "skyscraper" | "banner-lg" | "banner-sm";
}

export function Ad({ format = "rectangle", ...props }: AdProps) {
    const [randomZoneid, setRandomZoneid] = useState<string | undefined>(undefined);
    const zoneids = useMemo(() => "zoneid" in props ? [props.zoneid] : props.zoneids, [props]);

    useEffect(() => {
        setRandomZoneid(zoneids[Math.floor(Math.random() * zoneids.length)]);

        const providerScript = document.createElement('script');
        providerScript.async = true;
        providerScript.type = 'application/javascript';
        providerScript.src = 'https://a.magsrv.com/ad-provider.js';
        document.body.appendChild(providerScript);

        const pushScript = document.createElement('script');
        pushScript.textContent = `(AdProvider = window.AdProvider || []).push({"serve": {}});`;
        document.body.appendChild(pushScript);
    }, [zoneids]);

    return (
        <div className={cn("ad", `ad-${format}`)}>
            <ins className="eas6a97888e2" data-zoneid={randomZoneid}></ins>
        </div>
    );

}