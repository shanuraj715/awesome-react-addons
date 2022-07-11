export const wordsFirstCharUppercase = (string) => {
    if (typeof string === 'string' || string instanceof String) {
        let words = string.split(" ");
        for (let i = 0; i < words.length; i++)
            words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
        return words.join(" ");
    }
    console.error(`"wordsFirstCharUppercase()" expected a string parameter but get "${typeof string}".`)
    return string
}