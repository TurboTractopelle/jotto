import React from "react";

const Guessed = props => {
  const { guessedwords } = props;
  let guessedWordsDisplay;

  if (guessedwords.length) {
    guessedWordsDisplay = (
      <table data-test="guessed-words" className="table table-sm">
        <thead className="thead-light">
          <tr>
            <th>words</th>
            <th>letters</th>
          </tr>
        </thead>
        <tbody>
          {guessedwords.map((item, i) => (
            <tr data-test="guessed-word" key={i}>
              <td>{item.guessedWord}</td>
              <td>{item.letterMatchCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    guessedWordsDisplay = "input stuff";
  }

  return (
    <div className="Guessed" data-test="component-guessed">
      {guessedWordsDisplay}
    </div>
  );
};

export default Guessed;
