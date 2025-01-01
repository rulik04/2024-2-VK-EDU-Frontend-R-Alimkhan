import { useTranslationFormStore } from "../store/translationFormStore";
import LanguageSelector from "./LanguageSelector";
import { useEffect, useState } from "react";

const TranslationForm = ({ languages, onTranslate }) => {
    const {
        text,
        fromLanguage,
        toLanguage,
        setText,
        setFromLanguage,
        setToLanguage,
    } = useTranslationFormStore();
    const [translation, setTranslation] = useState("");

    useEffect(() => {
        const trimmedText = text.trim();
        if (!trimmedText) {
            setTranslation("");
            return;
        }
        const timerId = setTimeout(async () => {
            try {
                await onTranslate(
                    trimmedText,
                    fromLanguage,
                    toLanguage,
                    setTranslation
                );
            } catch (err) {
                console.error("Translation error:", err);
                setTranslation("Error translating text.");
            }
        }, 100);
        return () => clearTimeout(timerId);
    }, [text, fromLanguage, toLanguage, onTranslate]);

    return (
        <form className="p-4 flex">
            <div className="">
                <LanguageSelector
                    languages={languages}
                    value={fromLanguage}
                    onChange={setFromLanguage}
                    isTargetLanguage={false}
                />
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text to translate"
                    className="w-full p-2 border rounded mb-4 min-h-24"
                />
            </div>
            <div className="">
                <LanguageSelector
                    languages={languages}
                    value={toLanguage}
                    onChange={setToLanguage}
                    isTargetLanguage={true}
                />
                <textarea
                    defaultValue={translation}
                    className="w-full p-2 border rounded mb-4 min-h-24"
                />
            </div>
        </form>
    );
};

export default TranslationForm;
