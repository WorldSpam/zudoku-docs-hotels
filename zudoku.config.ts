import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  topNavigation: [
    { id: "docs", label: "Documentation" },
    { id: "api", label: "API Reference" },
    { id: "about", label: "About" },
    
  ],
  sidebar: {
    docs: [
      {
        type: "category",
        label: "Documentation",
        items: [
          "/docs/about",
          "/docs/installation",
          "/docs/authorization",
          "docs/srs",
        ],
      },
    ],
  },
  redirects: [
    { from: "/", to: "/docs/installation" },
    { from: "/about", to: "/docs/about" },
  ],
  apis: {
    type: "file",
    input: "./apis/openapi.yaml",
    navigationId: "api",
  },
  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
  basePath: "/zudoku-docs-hotels"
};

export default config;
