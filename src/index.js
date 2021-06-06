import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = [
  {
      id: 1,
      title: 'React',
      subtitle: 'Библиотека для создания пользовательских интерфейсов',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
  },
  {
      id: 2,
      title: 'Angular 2',
      subtitle: 'Один фреймворк',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
  },
  {
      id: 3,
      title: 'Ember',
      subtitle: 'Фреймворк для создания амбициозных веб-приложений',
      imageUrl: 'https://miro.medium.com/max/300/0*m0zzvBxDtHM4638k.png'
  },
  {
      id: 4,
      title: 'Vue',
      subtitle: 'Прогрессивный фреймворк',
      imageUrl: 'https://tuhub.ru/sites/default/files/2018-02/vuejs-logo_0.jpg'
  }
];

ReactDOM.render(
  <React.StrictMode>
    <App heroes={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
