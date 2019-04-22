import React from "react";

const Congrats = props => {
  const { success } = props;
  const successDisplay = success ? (
    <div className="Congrats alert alert-success" dataTest="component-congrats">
      <p>GG</p>
    </div>
  ) : (
    <div className="Congrats" dataTest="component-congrats">
      Find the word!
    </div>
  );

  return <div>{successDisplay}</div>;
};

export default Congrats;
