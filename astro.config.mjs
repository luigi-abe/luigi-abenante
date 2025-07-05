// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

const BASE_SITE = import.meta.env.DEV ? "" : "/luigi-abenante";

export default defineConfig({
    base: BASE_SITE,
    site: "https://lui-abe.github.io",
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [react()],
});
