const LanguageSelector = ({ languages, value, onChange, isTargetLanguage }) => (
    <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border rounded"
    >
        {Object.entries(languages).map(([code, name]) => {
            if (isTargetLanguage && code === "Autodetect") {
                return null;
            }
            return (
                <option key={code} value={code}>
                    {name}
                </option>
            );
        })}
    </select>
);

export default LanguageSelector;
