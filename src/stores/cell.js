import { types, getParent } from "mobx-state-tree";

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
    },
    remove() {
      getParent(self, 2).removeCell(self);
    },
    beforeDestroy() {
      console.info(`cell ${self.id} was destroyed`);
    }
  }));

export default Cell;
