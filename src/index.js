import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";

import "./styles.css";
import Editor from "./stores/editor";
import { onSnapshot, onPatch, addMiddleware } from "mobx-state-tree";

function App({ editor }) {
  const { visibleCells } = editor;

  console.log(visibleCells);

  if (!visibleCells.length) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {visibleCells.map(cell => (
        <li key={cell.id}>
          <input
            value={cell.value}
            onChange={evt => cell.changeValue(evt.target.value)}
          />
        </li>
      ))}
    </ul>
  );
}

const editor = Editor.create();

console.log("visible", editor.visibleCells);

//onSnapshot(editor, json => console.log(json));
//onPatch(editor, patch => console.log("patch", patch));

addMiddleware(editor, (call, next, abort) => {
  console.log(call);
  return next(call, i => i);
});

const rootElement = document.getElementById("root");

const AppObserved = observer(App);

ReactDOM.render(<AppObserved editor={editor} />, rootElement);
