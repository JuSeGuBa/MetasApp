import styles from './Details.module.css';

function Details() {
    const frequencies = ["dia", "semana", "mes", "año"];
    const icons = ["💻", "🏃", "📚", "✈︎", "💵"];
    return ( 
        <div className='card'>
            <form className='p-4'>
                <label classname="label">
                    Decribe tu meta
                    <input className='input' placeholder="ej. 52 caminatas"/>
                </label>
                <label classname="label">
                    ¿Con que frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
                    <div className="flex mb-6">
                        <input className='input mr-6' type="number"/>
                        <select className='input'>
                            {frequencies.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label classname="label">
                    ¿Cuantas veces deseas completar esta meta?
                    <input className='input' type="number" />
                </label>
                <label classname="label">
                    ¿Tienes una fecha limite?
                    <input className='input' type="date" />
                </label>
                <label classname="label">
                    Escoge el icono para la meta
                    <select>
                        {icons.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                </label>
            </form>
            <div className={styles.buttons}>
                <button className="button button--black">Crear</button>
                <button className="button button--gray">Cancelar</button>
            </div>
        </div>
     );
}

export default Details;
