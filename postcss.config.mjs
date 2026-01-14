export default {
    plugins: {
        "postcss-discard-comments": {},
        "postcss-custom-selectors": {},
        "@yuheiy/postcss-custom-functions": {
            functions: {
                "--spacing": (value) => `calc(var(--sd-spacing) * ${value})`,
                "--transparent": (color, alpha) => `oklch(from ${color} l c h / ${alpha})`,
                "--lighten": (color, adjust) => `oklch(from ${color} calc(l + ${adjust}) c h)`,
                "--darken": (color, adjust) => `oklch(from ${color} calc(l - ${adjust}) c h)`,
            }
        },
        "postcss-import": {},
        "postcss-conditionals": {},
        "postcss-each": {},
        "postcss-for": {},
        "postcss-calc": {},
        "postcss-nested": {},
        "postcss-sorting": {
            "properties-order": "alphabetical",
            "unspecified-properties-position": "bottom"
        },
        "postcss-custom-media": {},
        "autoprefixer": {},
        "postcss-combine-duplicated-selectors": {
            removeDuplicatedValues: true
        }
    }
}