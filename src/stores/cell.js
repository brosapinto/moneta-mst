import { types } from "mobx-state-tree";

const Position = types.model({
  column: types.number,
  row: types.number
});

const Cell = types
  .model({
    id: types.identifier,
    position: Position,
    value: types.string
  })
  .actions(self => ({
    changeValue(value) {
      self.value = value;
    }
  }));

export default Cell;
