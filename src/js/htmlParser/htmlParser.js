export default class HtmlParser {

    static renderHosts(hosts) {
        const mainWrapper = document.getElementById('hosts-wrapper');
        hosts.forEach(host => {
            mainWrapper.innerHTML += HtmlParser.renderHost(host);
        });
    }

    static renderApplications(applications) {
        let applicationWidget = '';
        for (let x = 0; x < 5; x++) {
            applicationWidget = applicationWidget.concat(HtmlParser.renderApplication(applications[x]));
        }

        return applicationWidget;
    }

    static renderApplication(application) {
        return `
        <div class="application">
            <div class="app-apdex">${application.apdex}</div>
            <div class="app-name">${application.name}</div>
        </div>
        `;
    }

    static renderHost(host) {
        return `
        <div class="host">
            <div class="host-name">${host._name}</div>
            <div class="applications-list">
                ${HtmlParser.renderApplications(host._applications)}
            </div>
        </div>
        `;
    }
}