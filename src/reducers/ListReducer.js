const initialState = [
  {
    title: "Lasst episode",
    id: 0,
    cards: [
      {
        id: 0,
        text: "this first text sample",
      },
      {
        id: 1,
        text: "this second text sample",
      },
    ],
  },
  // {
  //   title: "Lasst episode",
  //   id: 1,
  //   cards: [
  //     {
  //       id: 0,
  //       text: "this first text sample",
  //     },
  //     {
  //       id: 1,
  //       text: "this second text sample",
  //     },
  //   ],
  // },
];

const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ListReducer;
