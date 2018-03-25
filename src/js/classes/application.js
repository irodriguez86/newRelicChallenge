export default class Application {
    /**
     * Application class constructor
     * @param name - application name
     * @param contributors - list of contributors of the application
     * @param version - application version
     * @param apdex - apdex value of the application
     */
    constructor(name, contributors, version, apdex) {
        this.name = name;
        this.contributors = contributors;
        this.version = version;
        this.apdex = apdex;
    }
}
