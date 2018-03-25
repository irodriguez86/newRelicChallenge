import Application from '../classes/application';
import Host from "../classes/host";

const hosts = new Map();

export default class Parser {
    /**
     * Given all the json data, create a Map object, with all the unique hosts as a keys, and
     * a Host object as a value, then sort Applications inside the Host object for each Host
     * @param data - json content with every application and their information
     * @returns {Map}
     */
    static parse(data) {
        data.forEach((applicationData) => {
            const app = new Application(...Object.values(applicationData));

            Parser.addAppToHostsWithoutSort(app, applicationData.host);
        });

        hosts.forEach(host => {
            host.sortApplications();
        });

        return hosts;
    }

    /**
     * For each host, if this does not exist in the host Map, insert it, add the current
     * application to every host in the map
     * @param app - Application object
     * @param hostsNames - list of host names where the application is
     */
    static addAppToHostsWithoutSort(app, hostsNames) {
        hostsNames.forEach((hostName) => {
            if( !hosts.has(hostName) ) {
                hosts.set(hostName, new Host(hostName));
            }

            hosts.get(hostName).addApplication(app);
        });
    }

    /**
     * For each host, if this does not exist in the host Map, insert it, add the current
     * application to every host in the map, we only sort applications if host already exists
     * @param app - Application object
     * @param hostsNames - list of host names where the application is
     */
    static addAppToHosts(app, hostsNames){
        hostsNames.forEach((hostName) => {
            if( !hosts.has(hostName) ) {
                hosts.set(hostName, new Host(hostName));
                hosts.get(hostName).addApplication(app);
            }else {
                hosts.get(hostName).addApplication(app);
                hosts.get(hostName).sortApplications();
            }
        });
    }

    /**
     * Remove the given Application from every host in the hosts Map
     * @param application - Application object
     */
    static removeAppFromHosts(application) {
        hosts.forEach(host => {
            host.removeApplication(application);
        });
    }
}
