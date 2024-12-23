const LanguageSelector = ({ languages, value, onChange }) => (
    <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border rounded"
    >
        {Object.entries(languages).map(([code, name]) => (
            <option key={code} value={code}>
                {name}
            </option>
        ))}
    </select>
);

export default LanguageSelector;
