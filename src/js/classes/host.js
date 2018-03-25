export default class Host {
    constructor(name) {
        this._name = name;
        this._applications = [];
    }

    addApplication(application) {
        this._applications.push(application);
    }

    removeApplication(application) {
        if (typeof application === 'object') {
            return this._removeApplicationByObject(application);
        }

        return this._removeApplicationByName(application);
    }

    _removeApplicationByObject(application) {
        const index = this._applications.indexOf(application);

        if (index === -1) {
            return false;
        }

        this._applications = this._applications.splice(index, 1);

        return true;
    }

    _removeApplicationByName(applicationName) {
        let length = this._applications.length;

        this._applications = this._applications.filter(application => application !== applicationName);

        return length !== this._applications;
    }

    sortApplications() {
        this._applications.sort((a, b) => {
            return b.apdex - a.apdex;
        });
    }
}