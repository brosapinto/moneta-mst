import { types, destroy } from "mobx-state-tree";
import Cell from "./cell";

const View = types
  .model({
    id: types.identifier,
    name: types.maybe(types.string),
    cells: types.map(Cell),
    columns: types.integer,
    rows: types.integer
  })
  .actions(self => {
    return { removeCell: destroy };
  });

export default View;
