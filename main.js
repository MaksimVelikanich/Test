const getFirstLetter =(word) => {
    let index = 0;

    const check = () =>{
        const letter = word[index];
        const isNumber = letter.match(/[0-9]/);
        const isLetter = letter.match(/[aA-zZ]/);
        const isSymbol = !isNumber && !isLetter;

        if (isNumber){
            console.log('[0-9]')
        }
        else if (isLetter){
            console.log(letter)
        }
        else if (isSymbol){
            index +=1;
            check();
        }

    }
    check()

}
getFirstLetter("b")