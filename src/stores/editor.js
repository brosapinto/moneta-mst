import { types, flow, applySnapshot } from "mobx-state-tree";
import { UndoManager } from "mst-middlewares";
import View from "./view";
import { loadView } from "../services";

const Editor = types
  .model({
    view: types.maybe(View),
    history: types.optional(UndoManager, {})
  })
  .actions(self => {
    return {
      load: flow(function*() {
        try {
          const view = yield loadView();

          applySnapshot(self, { view });
        } catch (err) {
          console.error(err);
        }
      }),
      afterCreate() {
        self.load();
      }
    };
  })
  .views(self => ({
    get visibleCells() {
      return (self.view && [...self.view.cells.values()]) || [];
    }
  }));

export default Editor;
