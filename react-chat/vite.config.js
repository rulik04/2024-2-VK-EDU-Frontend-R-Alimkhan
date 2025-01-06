import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/2024-2-VK-EDU-Frontend-R-Alimkhan/",
    resolve: {
        alias: {
            "@": "/src",
        },
    },
    server: {
        proxy: {
            "/api": {
                target: "https://vkedu-fullstack-div2.ru",
                // target: "http://localhost:8080",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
});
