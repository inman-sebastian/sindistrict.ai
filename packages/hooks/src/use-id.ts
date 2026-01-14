import { useMemo } from "react";

export type UseIdProps = {
    prefix?: string;
    suffix?: string;
    length?: number;
    delimiter?: string;
}

export function useId(props: UseIdProps) {
    const { prefix = "", suffix = "", length = 10, delimiter = "-" } = props;

    const idPrefix = prefix ? `${prefix}${delimiter}` : "";
    const idSuffix = suffix ? `${delimiter}${suffix}` : "";
    return `${idPrefix}${Math.random().toString(36).substring(2, length + 2)}${idSuffix}`;
}