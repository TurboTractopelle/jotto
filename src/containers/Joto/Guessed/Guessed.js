import React from "react";

const Guessed = props => {
  const { guessedwords } = props;
  let guessedWordsDisplay;

  if (guessedwords) {
    guessedWordsDisplay = "tableau";
  } else {
    guessedWordsDisplay = "input stuff";
  }

  return (
    <div className="Guessed" dataTest="component-guessed">
      {guessedWordsDisplay}
    </div>
  );
};

export default Guessed;
