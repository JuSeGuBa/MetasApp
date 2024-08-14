import Bond from './bond';
import './major.css';
import { ReactComponent as ListSVG } from '../img/list.svg';
import { ReactComponent as CreateSVG } from '../img/create.svg';

function Major({ Children }) {
  return (
    <div className='major'>
      <aside className='aside'>
        <Bond href="/lista" text="Lista de Metas">
        <ListSVG className='icon'/>
        </Bond>
        <Bond href="/crear" text="Nueva Meta">
        <CreateSVG className='icon'/>
        </Bond>
      </aside>
      <main className='main'>{Children}</main>
    </div>
  );
}

export default Major;
