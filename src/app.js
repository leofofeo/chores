import React from 'react';
import ReactDOM from 'react-dom';
import ChoresApp from './components/ChoresApp';
import 'normalize.css';
import './styles/styles.scss';

const appRoot = document.getElementById('app');
ReactDOM.render(<ChoresApp />, appRoot);
