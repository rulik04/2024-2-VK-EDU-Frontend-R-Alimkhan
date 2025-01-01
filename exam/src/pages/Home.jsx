import TranslationForm from "../components/TranslationForm";
import languages from "../../languages.json";
import { translateText } from "../api/translate";

const Home = () => {
    const handleTranslate = async (text, from, to, setTranslation) => {
        const translation = await translateText(text, from, to);
        setTranslation(translation);

        const history =
            JSON.parse(localStorage.getItem("translationHistory")) || [];
        history.push({ text, translation, from, to });
        localStorage.setItem("translationHistory", JSON.stringify(history));
    };

    return (
        <div>
            <TranslationForm
                languages={languages}
                onTranslate={handleTranslate}
            />
        </div>
    );
};

export default Home;
