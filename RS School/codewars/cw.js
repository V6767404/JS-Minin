// function capitalizeWord(word) {
//     word[0] = word[0].toUpperCase();
//     return word;
// }

// function capitalizeWord(word) {
//     z = word[0].toUpperCase();
//     word[0] = z;
//     console.log (word[0])
//     console.log (z)
// }
//
// capitalizeWord ('ewrewrwe')

function capitalizeWord(word) {
    // word[0] = word[0].toUpperCase();
    const word2 = word.charAt(0).toUpperCase() + word.slice(1);
    return word2;
    console.log (word2);
}

capitalizeWord ('ewrewrwe')