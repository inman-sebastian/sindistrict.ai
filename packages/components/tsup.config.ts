import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm"],
    dts: true,
    external: [
        // React and Next.js
        "react",
        "react-dom",
        "next",
        // Clerk packages (to avoid bundling CommonJS modules)
        "@services/clerk",
        "@clerk/nextjs",
        "@clerk/clerk-react",
        // Workspace service packages (should be externalized)
        /^@services\//,
        // Workspace packages (should be externalized, except utils which will be bundled)
        /^@packages\//,
        // Other dependencies that should not be bundled
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-brands-svg-icons",
        "@fortawesome/free-regular-svg-icons",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/react-fontawesome",
        "@untitledui/icons",
        "lucide-react",
    ],
    noExternal: [
        // Bundle @packages/utils since it's a dependency
        "@packages/utils",
    ],
});
