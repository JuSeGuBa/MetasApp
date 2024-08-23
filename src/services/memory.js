import { type } from "@testing-library/user-event/dist/type";
import { createContext, useReducer } from "react";
import Goal from "../component/shared/List/Goal";

const listMock = [
  {
    id: "1",
    details: "Correr por 30 minutos",
    period: "dia",
    events: 1,
    icon: "🏃",
    goal: 365,
    term: "2030-01-01",
    completed: 5,
  },
  {
    id: "2",
    details: "Leer libros",
    period: "año",
    events: 6,
    icon: "📚",
    goal: 12,
    term: "2030-01-01",
    completed: 0,
  },
  {
    id: "3",
    details: "Viajar parques nacionales",
    period: "mes",
    events: 1,
    icon: "✈︎",
    goal: 60,
    term: "2030-01-01",
    completed: 40,
  },
];

const stateInitial = {
  order: [],
  objects: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "colocar": {
      const goals = action.goals;
      const newState = {
        order: goals.map((goal) => goal.id),
        objects: goals.reduce(
          (object, goal) => ({ ...object, [goal.id]: goal }),
          {}
        ),
      };
      return newState;
    }
    case "crear": {
      const id = Math.random(); // action.goals;
      const newState = {
        order: [...state.order, id],
        objects: {
            ...state.objects,
            [id]: action.goal
        }
      };
      console.log(newState);
      return newState;
    }
  }
}

const goals = reducer(stateInitial, { type: "colocar", goals: listMock });

export const Context = createContext(null);

function Memory({ children }) {
  const [state, send] = useReducer(reducer, goals);
  return <Context.Provider value={[state, send]}>{children}</Context.Provider>;
}

export default Memory;
