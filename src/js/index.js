import data from '../../host-app-data.json';
import Parser from './utils/parser';
import HtmlParser from "./htmlParser/htmlParser";

const hosts = Parser.parse(data);
console.log(hosts);
HtmlParser.renderHosts(hosts);

document.getElementsByClassName('grid-toggle-wrapper')[0].addEventListener('click', () => {
    const listTypeCheckbox = document.getElementById("list-type-checkbox"),
        hostWrapper = document.getElementById('hosts-wrapper');

    hostWrapper.classList.remove("grid", "list");


    if (listTypeCheckbox.checked === true) {
        listTypeCheckbox.labels[0].innerText = 'Show as an awesome grid';
        hostWrapper.classList.add("list");
    }else{
        listTypeCheckbox.labels[0].innerHTML = 'Show as a list';
        hostWrapper.classList.add("grid");
    }
});