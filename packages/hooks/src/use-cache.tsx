import { useEffect, useMemo,  useState } from "react";

export async function useCache(name: string, version: `v${number}` = "v1") {
    const cacheName = useMemo(() => `${name}-${version}`, [name, version]);

    async function getCachedData(url: string | URL) {
        const cacheKey = new URL(url).toString();
        const cacheStorage = await caches.open(cacheName);
        const cachedResponse = await cacheStorage.match(cacheKey);

        if (!cachedResponse || !cachedResponse.ok) {
            return false;
        }

        return await cachedResponse.json();
    }
}