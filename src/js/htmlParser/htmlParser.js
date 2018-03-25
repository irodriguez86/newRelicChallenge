export default class HtmlParser {
    /**
     * Each the given hosts to add to the host-wrapper element the html block, which is a card with
     * the name of the host as a title, and a list of the top 5 applications ordered by apdex
     * @param hosts - Map object with a hosts list
     */
    static renderHosts(hosts) {
        const mainWrapper = document.getElementById('hosts-wrapper');
        hosts.forEach(host => {
            mainWrapper.innerHTML += HtmlParser.renderHost(host);
        });
    }

    /**
     * For a given list of applications, an html string is created an concatenated
     * @param applications - array of Applications
     * @returns {string} - string with the whole application nodes
     */
    static renderApplications(applications) {
        let applicationList = '';
        for (let x = 0; x < 5; x++) {
            applicationList = applicationList.concat(HtmlParser.renderApplication(applications[x]));
        }

        return applicationList;
    }

    /**
     * For an Application object, return a parsed string template
     * @param application - Application object
     * @returns {string}
     */
    static renderApplication(application) {
        return `
        <div class="application" data-release="${application.version}">
            <div class="app-apdex">${application.apdex}</div>
            <div class="app-name">${application.name}</div>
        </div>
        `;
    }

    /**
     * For a given Host, parse and return of its template string, in which also render the list of
     * its applications
     * @param host - Host object
     * @returns {string}
     */
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