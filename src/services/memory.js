import { createContext, useReducer } from "react";

// const memory = localStorage.getItem('goals');
const stateInitial = {
  order: [],
  objects: {},
};
//   ? JSON.parse(memory)
//   : {
//     order: [],
//     objects: {}
// };

function reducer(state, action) {
  switch (action.type) {
    case "colocar": {
      const goals = action.goals;
      const newState = {
        order: goals.map((goal) => goal.id),
        objects: goals.reduce(
          (object, goal) => ({
            ...object,
            [goal.id]: goal,
          }),
          {}
        ),
      };
      // localStorage.setItem('goals', JSON.stringify(newState))
      return newState;
    }
    case "crear": {
      const id = action.goal.id; // String(Math.random());
      const newState = {
        order: [...state.order, id],
        objects: {
          ...state.objects,
          [id]: action.goal,
        },
      };

      // localStorage.setItem('goals', JSON.stringify(newState))
      return newState;
    }
    case "actualizar": {
      const id = action.goal.id;
      state.objects[id] = {
        ...state.objects[id],
        ...action.goal,
      };
      const newState = { ...state };
      // localStorage.setItem('goals', JSON.stringify(newState))
      return newState;
    }
    case "borrar": {
      const id = action.id;
      const newOrder = state.order.filter((item) => item !== id);
      delete state.objects[id];
      const newState = {
        order: newOrder,
        objects: state.objects,
      };
      // localStorage.setItem('goals', JSON.stringify(newState))
      return newState;
    }
    default:
      throw new Error();
  }
}

export const Context = createContext(null);

function Memory({ children }) {
  const [state, send] = useReducer(reducer, stateInitial);
  return <Context.Provider value={[state, send]}>{children}</Context.Provider>;
}

export default Memory;
