import { useContext, useEffect, useState } from "react";
import styles from "./Details.module.css";
import { Context } from "../../../services/memory";
import { useNavigate, useParams } from "react-router-dom";
import { createGoal, deleteGoal, updateGoal } from "../../../services/Orders";

function Details() {
  const [state, send] = useContext(Context);
  const { id } = useParams();

  const [form, setForm] = useState({
    details: "",
    events: 1,
    period: "semana",
    icon: "🏃",
    goal: 52,
    term: "2030-01-01",
    completed: 0,
  });

  const { details, events, period, icon, goal, term, completed } = form;

  const onChange = (event, prop) => {
    setForm((state) => ({ ...state, [prop]: event.target.value }));
  };

  const browse = useNavigate();
  const goalMemory = state.objects[id];

  useEffect(() => {
    if (!id) return;
    if (!goalMemory) {
      return browse("/404");
    }
    setForm(goalMemory);
  }, [id, goalMemory, browse]);

  const create = async () => {
    const newGoal = await createGoal();
    send({ type: "crear", goal: newGoal });
    browse("/list");
  };

  const update = async () => {
    const goalUpdate = await updateGoal();
    send({ type: "actualizar", goal: goalUpdate });
    browse("/list");
  };

  const eliminate = async () => {
    const idDelete = await deleteGoal();
    send({ type: "borrar", id: idDelete });
    browse("/list");
  };

  const cancel = () => {
    browse("/list");
  };

  const frequencies = ["dia", "semana", "mes", "año"];
  const icons = ["💻", "🏃", "📚", "✈︎", "💵"];
  return (
    <div className="card">
      <form className="p-4">
        <label className="label">
          Decribe tu meta
          <input
            className="input"
            placeholder="ej. 52 caminatas"
            value={details}
            onChange={(e) => onChange(e, "details")}
          />
        </label>
        <label className="label">
          ¿Con que frecuencia deseas cumplir tu meta?{" "}
          <span>(ej. 1 vez a la semana)</span>
          <div className="flex mb-6">
            <input
              className="input mr-6"
              type="number"
              value={events}
              onChange={(e) => onChange(e, "events")}
            />
            <select
              className="input"
              value={period}
              onChange={(e) => onChange(e, "period")}
            >
              {frequencies.map((opcion) => (
                <option key={opcion} value={opcion}>
                  {opcion}
                </option>
              ))}
            </select>
          </div>
        </label>
        <label className="label">
          ¿Cuantas veces deseas completar esta meta?
          <input
            className="input"
            type="number"
            value={goal}
            onChange={(e) => onChange(e, "goal")}
          />
        </label>
        <label className="label">
          ¿Tienes una fecha limite?
          <input
            className="input"
            type="date"
            value={term}
            onChange={(e) => onChange(e, "term")}
          />
        </label>
        <label className="label">
          ¿Cuantas veces haz completado ya esta meta?
          <input
            className="input"
            type="number"
            value={completed}
            onChange={(e) => onChange(e, "completed")}
          />
        </label>
        <label className="label">
          Escoge el icono para la meta
          <select
            className="input"
            value={icon}
            onChange={(e) => onChange(e, "icon")}
          >
            {icons.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </label>
      </form>
      <div className={styles.buttons}>
        {!id && (
          <button className="button button--black" onClick={create}>
            Crear
          </button>
        )}
        {id && (
          <button className="button button--black" onClick={update}>
            Actualizar
          </button>
        )}
        {id && (
          <button className="button button--black" onClick={eliminate}>
            Borrar
          </button>
        )}
        <button className="button button--gray" onClick={cancel}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default Details;
