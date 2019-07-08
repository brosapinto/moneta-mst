import { types } from "mobx-state-tree";
import View from "./view";

const App = types
  .model({
    id: types.identifier,
    name: types.string,
    hierarchy: types.array(View)
  })
  .actions(self => ({}));

export default App;
