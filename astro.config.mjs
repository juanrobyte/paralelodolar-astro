import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    tailwind({
      config: {
        content: ["./src//*.{astro,html,js,jsx,ts,tsx}"],
        theme: {
          extend: {
            fontFamily: {
              poppins: ["Poppins", "sans-serif"],
              inter: ["Inter", "sans-serif"],
            },
          },
        },
        plugins: [],
      },
    }),
  ],
});