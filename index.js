const text =
  "Lorem, ipsum dolor sit amet, consectetur adipisicing elit, \
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
  Excepteur sint occaecat cupidatat non proident, \
  sunt in culpa qui officia deserunt mollit anim id est laborum.";

  console.log(text)

  let textInArray = text.split(' ')
  console.log(textInArray)

  let textCensored = ""

  function censoring(someText, badWord) {
    for (const word of text) {
      let textCensored = someText.replace(badWord, "***")
    }
    return textCensored
  }

  let censoredText = censoring(textInArray, " in ")
  console.log(censoredText)