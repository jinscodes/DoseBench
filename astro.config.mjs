import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jinscodes.github.io",
  base: process.env.GITHUB_ACTIONS === "true" ? "/DoseBench" : "/",
});
