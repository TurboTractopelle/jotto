import React from "react";

const Congrats = props => {
  const { success } = props;
  const successDisplay = success ? (
    <div
      className="Congrats alert alert-success"
      data-test="component-congrats"
    >
      <p>GG</p>
    </div>
  ) : (
    <div className="Congrats" data-test="component-congrats">
      Find the word!
    </div>
  );

  return <div>{successDisplay}</div>;
};

export default Congrats;
