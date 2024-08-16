function Details() {
    const frequencies = ["dia", "semana", "mes", "año"];
    const icons = ["💻", "🏃", "📚", "✈︎", "💵"];
    return ( 
        <div>
            <form>
                <label>
                    Decribe tu meta
                    <input placeholder="ej. 52 caminatas"/>
                </label>
                <label>
                    ¿Con que frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
                    <div>
                        <input type="number"/>
                        <select>
                            {frequencies.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label>
                    ¿Cuantas veces deseas completar esta meta?
                    <input type="number" />
                </label>
                <label>
                    ¿Tienes una fecha limite?
                    <input type="date" />
                </label>
                <label>
                    Escoge el icono para la meta
                    <select>
                        {icons.map(opcion => <option value={opcion}>{opcion}</option>)}
                    </select>
                </label>
            </form>
            <div>
                <button>Crear</button>
                <button>Cancelar</button>
            </div>
        </div>
     );
}

export default Details;
