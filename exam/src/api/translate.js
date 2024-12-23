export const translateText = async (text, from, to) => {
    const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`
    );
    const data = await response.json();
    return data.responseData.translatedText;
};
