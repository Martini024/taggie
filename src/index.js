import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

addLocaleData([...en, ...zh]);

ReactDOM.render(<App />, document.getElementById('root'));
