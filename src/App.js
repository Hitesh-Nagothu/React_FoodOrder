import { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {

  const [isOpen, setisOpen] = useState(false)

  const setOpen = () => {
    setisOpen(true)
  };

  const setClose= () => {
    setisOpen(false)
  }

  return (
    <Fragment>
      {isOpen && <Cart setClose={setClose}  />}
      <Header setOpen={setOpen} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
