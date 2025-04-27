import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  // For now, this is only being deployed to mocha-docs-next.netlify.app.
  // Soon we'll move it onto mochajs.org/next.
  ...(!process.env.NETLIFY_BUILD_BASE && { base: "/next" }),
  integrations: [
    starlight({
      title: "Mocha",
      description:
        "The classic, reliable, trusted JavaScript test framework for Node.js & the Browser. ☕",
      logo: {
        dark: "./src/components/icon-dark.svg",
        light: "./src/components/icon-light.svg",
      },
      customCss: ["./src/style/custom.css"],
      components: {
        Footer: "./src/components/Footer.astro",
        Head: "./src/components/Head.astro",
        PageTitle: "./src/components/PageTitle.astro",
      },
      sidebar: [
        { slug: "getting-started" },
        {
          items: [
            { slug: "running/configuring" },
            { slug: "running/cli" },
            { slug: "running/test-globs" },
            { slug: "running/browsers" },
            { slug: "running/editor-plugins" },
          ],
          label: "Running Mocha",
        },
        {
          items: [
            { slug: "declaring/dynamic-tests" },
            { slug: "declaring/exclusive-tests" },
            { slug: "declaring/inclusive-tests" },
            { slug: "declaring/pending-tests" },
            { slug: "declaring/retrying-tests" },
          ],
          label: "Declaring Tests",
        },
        {
          items: [
            { slug: "features/arrow-functions" },
            { slug: "features/assertions" },
            { slug: "features/asynchronous-code" },
            { slug: "features/diffs" },
            { slug: "features/error-codes" },
            { slug: "features/global-fixtures" },
            { slug: "features/hooks" },
            { slug: "features/parallel-mode" },
            { slug: "features/root-hook-plugins" },
            { slug: "features/timeouts" },
          ],
          label: "Features",
        },
        {
          collapsed: true,
          items: [
            { slug: "interfaces/about" },
            { slug: "interfaces/bdd" },
            { slug: "interfaces/tdd" },
            { slug: "interfaces/exports" },
            { slug: "interfaces/qunit" },
            { slug: "interfaces/require" },
            { slug: "interfaces/third-party" },
          ],
          label: "Interfaces",
        },
        {
          collapsed: true,
          items: [
            { slug: "reporters/about" },
            { slug: "reporters/spec" },
            { slug: "reporters/doc" },
            { slug: "reporters/dot" },
            { slug: "reporters/html" },
            { slug: "reporters/json-stream" },
            { slug: "reporters/json" },
            { slug: "reporters/landing" },
            { slug: "reporters/list" },
            { slug: "reporters/markdown" },
            { slug: "reporters/min" },
            { slug: "reporters/nyan" },
            { slug: "reporters/progress" },
            { slug: "reporters/tap" },
            { slug: "reporters/xunit" },
            { slug: "reporters/third-party" },
          ],
          label: "Reporters",
        },
        {
          collapsed: true,
          items: [
            { slug: "explainers/detecting-multiple-calls-to-done" },
            { slug: "explainers/nodejs-native-esm-support" },
            { slug: "explainers/run-cycle-overview" },
            { slug: "explainers/test-duration" },
            { slug: "explainers/test-fixture-decision-tree" },
          ],
          label: "Explainers",
        },
        {
          label: "API",
          link: "https://mochajs.org/api",
        },
      ],
      social: [
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/KeDn2uXhER",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/mochajs/mocha",
        },
      ],
    }),
  ],
});
