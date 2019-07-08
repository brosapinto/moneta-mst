import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";

import "./styles.css";
import EditorModel from "./stores/editor";
import Cell from "./Cell";

function App({ editor }) {
  const { isLoading, visibleCells, history } = editor;
  const undo = () => history.canUndo && history.undo();
  const redo = () => history.canRedo && history.redo();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ul>
        {visibleCells.sort().map(cell => (
          <li key={cell.id}>
            <Cell cell={cell} />
          </li>
        ))}
      </ul>
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>
    </>
  );
}

const editor = EditorModel.create();
//onSnapshot(editor, json => console.log(json));

const rootElement = document.getElementById("root");
const AppContainer = observer(App);
ReactDOM.render(<AppContainer editor={editor} />, rootElement);
