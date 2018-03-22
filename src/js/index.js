import * as data from '../../host-app-data.json';

const mainContainer = document.getElementById('main-wrapper');

mainContainer.innerHTML = JSON.stringify(data);