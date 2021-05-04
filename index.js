const text =
  "Lorem, ipsum dolor sit amet, consectetur adipisicing elit, \
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
  Excepteur sint occaecat cupidatat non proident, \
  sunt in culpa qui officia deserunt mollit anim id est laborum.";

  console.log(text)

  
  //----function-------------------------------------------------------------
  function censor(someText, badWord, replacementWord) {
    const textInArray = someText.split(' ')

    //go through each word 
    if (let i = 0; i < textInArray.length; i++) {
      const word = words[i];  // we call each word instead of "i" -> "word"

      if (word.toLowerCase().includes(badWord.toLowerCase())) {
        words[i] = replacementWord;
      }
    }

    return {
      censoredText: words.join(" ")
    }
  }
  //---------------------------------------------------------------------

  let result = censor(text, "in", "***") //inside "result" it's return(obj)
  console.log(`The text censored is: `, result.censoredText)
