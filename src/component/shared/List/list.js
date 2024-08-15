import Meta from './Goal';

const listMock = [{
    "id": "1",
    "details": "Correr por 30 minutos",
    "period": "dia",
    "events": 1,
    "icon": "🏃",
    "goal": 365,
    "term": "2030-01-01",
    "completed": 5,
  },
  {
    "id": "2",
    "details": "Leer libros", 
    "period": "año", 
    "events": 6,
    "icon": "📚",
    "goal": 12,
    "term": "2030-01-01",
    "completed": 0
  },
  {
    "id": "3",
    "details": "Viajar parques nacionales", 
    "period": "mes", 
    "events": 1    ,
    "icon": "✈︎",
    "goal": 60,
    "term": "2030-01-01",
    "completed": 40
  }
];

function List() {
    return ( 
        listMock.map(goal => <Meta {...goal}></Meta>)
     );
}

export default List;