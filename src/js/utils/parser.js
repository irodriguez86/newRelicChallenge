import Application from '../classes/application';
import Host from "../classes/host";

const hosts = new Map();

export default class Parser {

    static parse(data) {
        data.forEach((applicationData) => {
            const app = new Application(...Object.values(applicationData));

            Parser.addAppToHosts(app, applicationData.host);
        });

        for (const host of hosts) {
            host[1].sortApplications();
        }

        return hosts;
    }

    static addAppToHosts(app, hostsNames) {
        hostsNames.forEach((hostName) => {
            if( !hosts.has(hostName) ) {
                hosts.set(hostName, new Host(hostName));
            }

            hosts.get(hostName).addApplication(app);
        });
    }

    static removeAppFromHosts(app) {
        for(const host of hosts){
            host.removeApplication(app);
        }
    }

}