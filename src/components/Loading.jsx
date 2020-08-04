import React from "react";
import ReactLoading from 'react-loading';

function Loading() {
  return (
    <div className="row">
      <ReactLoading type={"spinningBubbles"} color={"#60b0f4"} height={100} width={100} />
    </div>
  );
}

export default Loading;
