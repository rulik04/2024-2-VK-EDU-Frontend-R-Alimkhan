import { useState, useEffect } from "react";

const TranslationHistory = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const storedHistory =
            JSON.parse(localStorage.getItem("translationHistory")) || [];
        setHistory(storedHistory);
    }, []);

    const clearHistory = () => {
        localStorage.removeItem("translationHistory");
        setHistory([]);
    };

    return (
        <div className="p-4">
            <h2 className="text-lg mb-4">Translation History</h2>
            {history.length === 0 ? (
                <p>No history available.</p>
            ) : (
                <ul>
                    {history.map((item, index) => (
                        <li key={index} className="mb-2">
                            <strong>{item.text}</strong> → {item.translation} (
                            {item.from} → {item.to})
                        </li>
                    ))}
                </ul>
            )}
            <button
                onClick={clearHistory}
                className="mt-4 p-2 bg-red-600 text-white rounded"
            >
                Clear History
            </button>
        </div>
    );
};

export default TranslationHistory;
