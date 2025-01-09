import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
export default [
    js.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        settings: {
            react: {
                version: "detect",
            },
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
        },
        ignores: ["node_modules/*", "build/*", "dist/*"],
    },
];
