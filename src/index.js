import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import { onSnapshot, onPatch, addMiddleware } from "mobx-state-tree";

import "./styles.css";
import EditorModel from "./stores/editor";
import Cell from "./Cell";

function App({ editor }) {
  const { visibleCells } = editor;

  if (!visibleCells.length) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {visibleCells.map(cell => (
        <li key={cell.id}>
          <Cell cell={cell} />
        </li>
      ))}
    </ul>
  );
}

const editor = EditorModel.create();
//onSnapshot(editor, json => console.log(json));
//onPatch(editor, patch => console.log("patch", patch));

const rootElement = document.getElementById("root");
const AppContainer = observer(App);
ReactDOM.render(<AppContainer editor={editor} />, rootElement);
