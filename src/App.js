
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faShoppingCart)


function App() {
  return (
    <>
    <header>
        <NavBar />
    </header>

    <main>
      <ItemListContainer greeting={'Productos Disponibles'} />
    </main>
    </>
  );
}

export default App;
