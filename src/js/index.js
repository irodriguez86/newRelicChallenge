import data from '../../host-app-data.json';
import Parser from './utils/parser';

const mainContainer = document.getElementById('main-wrapper');
const hosts = Parser.parse(data);

mainContainer.innerHTML = JSON.stringify(Parser.parse(data));