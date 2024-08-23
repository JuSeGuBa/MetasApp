import { useContext, useEffect, useState } from "react";
import styles from "./Details.module.css";
import { Context } from "../../../services/memory";
import { useNavigate } from "react-router-dom";

function Details() {
  const [form, setForm] = useState({
    details: "",
    events: 1,
    period: "semana",
    icon: "🏃",
    goal: 52,
    term: "2030-01-01",
    completed: 0
  });

  const [state, send] = useContext(Context);

  const { details, events, period, icon, goal, term, completed } = form;

  const onChange = (event, prop) => {
    setForm(state => ({...state, [prop]: event.target.value}));
  }

  useEffect(() => {
    // console.log(form);
  }, [form])

  const browse = useNavigate();

  const create = async () => {
    // console.log(form);
    send({ type: 'crear', goal: form });
    browse('/list');
  }

  const frequencies = ["dia", "semana", "mes", "año"];
  const icons = ["💻", "🏃", "📚", "✈︎", "💵"];
  return (
    <div className="card">
      <form className="p-4">
        <label className="label">
          Decribe tu meta
          <input className="input" placeholder="ej. 52 caminatas" value={details} onChange={e => onChange(e, 'details')}/>
        </label>
        <label className="label">
          ¿Con que frecuencia deseas cumplir tu meta?{" "}
          <span>(ej. 1 vez a la semana)</span>
          <div className="flex mb-6">
            <input className="input mr-6" type="number" value={events} onChange={e => onChange(e, 'events')}/>
            <select className="input" value={period} onChange={e => onChange(e, 'period')}>
              {frequencies.map((opcion) => (
                <option value={opcion}>{opcion}</option>
              ))}
            </select>
          </div>
        </label>
        <label className="label">
          ¿Cuantas veces deseas completar esta meta?
          <input className="input" type="number" value={goal} onChange={e => onChange(e, 'goal')}/>
        </label>
        <label className="label">
          ¿Tienes una fecha limite?
          <input className="input" type="date" value={term} onChange={e => onChange(e, 'term')}/>
        </label>
        <label className="label">
          ¿Cuantas veces haz completado ya esta meta?
          <input className="input" type="number" value={completed} onChange={e => onChange(e, 'completed')}/>
        </label>
        <label className="label">
          Escoge el icono para la meta
          <select className="input" value={icon} onChange={e => onChange(e, 'icon')}>
            {icons.map((opcion) => (
              <option value={opcion}>{opcion}</option>
            ))}
          </select>
        </label>
      </form>
      <div className={styles.buttons}>
        <button className="button button--black" onClick={create}>Crear</button>
        <button className="button button--gray">Cancelar</button>
      </div>
    </div>
  );
}

export default Details;
