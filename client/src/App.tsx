import React from 'react';
import { store } from './state'
import { Provider } from 'react-redux';
import Sentence from './components/Sentence';

function App() {
  return (
    <Provider store={store}>
      <Sentence />
    </Provider>
  );
}

export default App;
