

const encode = (word) =>{

    const result = []

    const wordArray = word.split('')
    let counter = 0
    let currentLetter = wordArray[0]
    for(let idx = 0; idx < wordArray.length ; idx ++){
        if(wordArray[idx] === currentLetter){
            counter++
            if(idx + 1 === wordArray.length){
                result.push(...[counter, currentLetter])
            }
        }else{
            result.push(...[counter, currentLetter])
            currentLetter = wordArray[idx]
            counter = 1
        }

    }

    return result.join('')

}

console.log(encode("aabaa"))