import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import GameStart from './components/gameStart';

const App = () => {
  return (
    <div>
      <h1 className="gameTitle">
        React Hangman
      </h1>
      <GameStart />
    </div>
  );
}

const store = createStore(reducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('.container'));
