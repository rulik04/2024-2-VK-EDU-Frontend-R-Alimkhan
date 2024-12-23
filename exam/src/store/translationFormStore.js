import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTranslationFormStore = create(
    persist(
        (set) => ({
            text: "",
            fromLanguage: "en",
            toLanguage: "es",
            setText: (text) => set({ text }),
            setFromLanguage: (fromLanguage) => set({ fromLanguage }),
            setToLanguage: (toLanguage) => set({ toLanguage }),
        }),
        {
            name: "translation-store",
            getStorage: () => localStorage,
        }
    )
);
