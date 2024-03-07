const translate = (text) =>{

    const vowels = ['a', 'e' , 'i', 'o', 'u']
    const textArray = text.split('')
    const result = []
    if(vowels.includes(textArray[0])){
        result.push(...['a','v',textArray[0]])
    }else{
        result.push(textArray[0])
    }
    for(let idx = 1; idx < textArray.length ; idx ++){
        if(vowels.includes(textArray[idx]) && !vowels.includes(textArray[idx - 1])){
            result.push(...['a','v',textArray[idx]])
        }else{
            result.push(textArray[idx])
        }
    }

    return result.join('')
}


console.log(translate("hello, secret meeting tonight"))