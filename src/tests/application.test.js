import Application from '../js/classes/application';

describe('Application', () => {
    it('assigns constructor variables properly', () => {
        const name = 'testName';
        const contributors = 'testContributors';
        const version = 'version';
        const apdex = 'apdex';

        const application = new Application(name, contributors, version, apdex);

        expect(application.name).toBe(name);
        expect(application.contributors).toBe(contributors);
        expect(application.version).toBe(version);
        expect(application.apdex).toBe(apdex);
    });
});