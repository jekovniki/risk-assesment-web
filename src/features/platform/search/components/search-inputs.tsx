export const searchInputs = (values: Record<string, any>) => {
    const inputs = Object.keys(values).map((key, _index) => {
        const value: string = values[key];
        let label = key;
        if (label === "idType") {
            label = "Document type"
        }
        if (label === 'idValue') {
            label = "Document number"
        }
        if (label === 'dateOfBirth') {
            label = 'Date of Birth'
        }
        if (value) {
            return (
                <span style={{ textTransform: "capitalize", marginRight: ".75rem" }}>
                    {label} "<strong>{value}</strong>"
                </span>
            );
        }
        return null;
    });
    return inputs;
};