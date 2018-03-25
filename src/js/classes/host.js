export default class Host {
    /**
     * Host class constructor
     * @param name - name of the host
     */
    constructor(name) {
        this._name = name;
        this._applications = [];
    }

    /**
     * Add Application object to _applications array
     * @param application - application object
     */
    addApplication(application) {
        this._applications.push(application);
    }

    /**
     * Remove application from _applications array if exists
     * @param application - application object
     * @returns {boolean}
     */
    removeApplication(application) {
        const index = this._applications.indexOf(application);

        if (index === -1) {
            return false;
        }

        this._applications.splice(index, 1);

        return true;
    }

    /**
     * Sort the _applications array with Array.prototype.sort. Look at README.md for more info
     */
    sortApplications() {
        this._applications.sort((a, b) => {
            return b.apdex - a.apdex;
        });
    }
}