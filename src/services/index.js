export const loadView = () =>
  new Promise(resolve => {
    const resp = {
      id: "bananas",
      name: "my view",
      columns: 4,
      rows: 4,
      cells: {
        c1: { id: "c1", value: "Hello", position: { column: 0, row: 0 } },
        c2: { id: "c2", value: "World", position: { column: 0, row: 0 } },
        c3: { id: "c3", value: "Waz up?", position: { column: 0, row: 0 } }
      }
    };

    setTimeout(() => resolve(resp), 500);
  });
