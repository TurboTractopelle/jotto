import React from "react";

const Congrats = props => {
  const { success } = props;
  return (
    <div className="Congrats" dataTest="component-congrats">
      {success && <p>GG</p>}
    </div>
  );
};

export default Congrats;
