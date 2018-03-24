
export const camelCaseToSentanceCase = (stringValue) => {
    if (!stringValue) 
        return;
    return stringValue
        .replace(/([A-Z][a-z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())
}
