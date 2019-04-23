export const getLetterMatchCount = (guessedWord, secrectWord) => {
  const guessedWordArr = Array.from(new Set(guessedWord.split("")));
  let counter = 0;
  guessedWordArr.map(
    i => (counter = secrectWord.includes(i) ? counter + 1 : counter + 0)
  );
  return counter;
};
