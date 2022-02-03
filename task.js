// for (var i = 0; i < 10; i++) {
//     (function (i){
//         setTimeout(() => {
//             console.log(i);
//         })
//     }).call(null, i)
//
// }
// console.log(i);


var russianVocabulary = {
    ['1']: 'ребенок',
    ['2']: 'ребёнка',
    ['5']: 'детей'
}

const languages = {
    russianVocabulary
}

function locale(childCount, store){
    // const defaultWord = 'defaultWord';

    let localeWord = store[childCount];
    // const defaultValue = store[defaultWord];

    // if (localeWord === undefined){
    //     localeWord = defaultValue
    // }

    for (item in store){
        if (+item <= childCount){
            localeWord = store[item]
        }

    }

    return `${childCount} ${localeWord}`
}



for (let i = 1; i <= 10; i++) {
    console.log(locale(i, languages['russianVocabulary']));
}
