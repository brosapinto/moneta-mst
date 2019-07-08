import React from "react";
import { observer } from "mobx-react";

function Cell({ cell }) {
  return (
    <>
      <input
        value={cell.value}
        onChange={evt => cell.changeValue(evt.target.value)}
      />
      <button onClick={() => cell.remove()}>Delete</button>
    </>
  );
}

export default observer(Cell);
