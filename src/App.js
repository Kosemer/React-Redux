import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header'

function App() {
  return (
    <Fragment>
      <Header></Header>
    <Counter />
    </Fragment>
  );
}

export default App;
