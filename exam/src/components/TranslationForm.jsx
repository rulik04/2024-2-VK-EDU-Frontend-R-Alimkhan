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
        if (text.trim()) {
            onTranslate(text, fromLanguage, toLanguage, setTranslation);
        } else {
            setTranslation("");
        }
    }, [text, fromLanguage, toLanguage]);

    return (
        <form className="p-4 flex">
            <div className="">
                <LanguageSelector
                    languages={languages}
                    value={fromLanguage}
                    onChange={setFromLanguage}
                />
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text to translate"
                    className="w-full p-2 border rounded mb-4"
                />
            </div>
            <div className="">
                <LanguageSelector
                    languages={languages}
                    value={toLanguage}
                    onChange={setToLanguage}
                />
                <textarea
                    defaultValue={translation}
                    className="w-full p-2 border rounded mb-4"
                />
            </div>
        </form>
    );
};

export default TranslationForm;
