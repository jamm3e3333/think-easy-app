import React from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import { store } from './state'
import { Provider } from 'react-redux';
import { SentencePaths } from './routes/config';

import Navigator from './components/Navigator';
import ResultSentence from './components/ResultSentence';
import ResultString from './components/ResultString';
import SentenceItem from './components/SentenceItem';
import Header from './components/Header';

function App() {
  const location = useLocation();

  return (
    <Provider store={store}>
      <Header />
      <Routes>
      <Route 
            path='/' 
            element={<Navigate replace to={SentencePaths[0]} />}
        />
        {SentencePaths.map(path => {
            return (
                <Route path={`/${path}`} element={<SentenceItem path={path} />} key={path}/>
            );
        })}
        <Route path='/result' element={<ResultString />} />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
      { location.pathname.replace('/','') !== 'result' && 
      <>
        <ResultSentence />
        <Navigator />
      </>}
    </Provider>
  );
}

export default App;
