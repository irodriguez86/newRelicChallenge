import data from '../../host-app-data.json';
import Parser from './utils/parser';
import HtmlParser from "./htmlParser/htmlParser";

/**
 * Parse json data, and render it
 */
const hosts = Parser.parse(data);
HtmlParser.renderHosts(hosts);

/**
 * Bind checkbox event to toggle between both types of views
 */
document.getElementsByClassName('grid-toggle-wrapper')[0].addEventListener('click', () => {
    const listTypeCheckbox = document.getElementById("list-type-checkbox");
    const hostWrapper = document.getElementById('hosts-wrapper');

    hostWrapper.classList.remove("grid", "list");

    if (listTypeCheckbox.checked === true) {
        listTypeCheckbox.labels[0].innerText = 'Show as an awesome grid';
        hostWrapper.classList.add("list");
    }else{
        listTypeCheckbox.labels[0].innerText = 'Show as list';
        hostWrapper.classList.add("grid");
    }
});

/**
 * Bind event to an application element to show an alert with the version number
 */
document.getElementById('hosts-wrapper').addEventListener('click', event => {
    if(event.target && event.target.matches('.app-name, .app-apdex')){
        event.stopPropagation();
        const release = event.target.parentNode.getAttribute('data-release');
        alert('Version number: ' + release);
    }
});