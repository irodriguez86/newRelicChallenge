import Host from '../js/classes/host';

describe('Host', () => {
    let host;

    beforeEach(() => {
        host = new Host('testName');
    });

   it('assigns constructor variables properly', () => {
       const name = 'testName';

       expect(host._name).toBe(name);
       expect(host._applications).toHaveLength(0);
   });

   it('method addApplication', () => {
        host.addApplication('1');
        expect(host._applications).toHaveLength(1);
   });

    it('method removeApplication', () => {
        const application = {};
        host._applications.push(application);
        expect(host._applications.length).toBe(1);
        host.removeApplication(application);
        expect(host._applications.length).toBe(0);
    });

    it('method sortApplications', () => {
        host._applications = [
            {
                apdex: 3,
            },
            {
                apdex: 4,
            },
            {
                apdex: 5,
            },
        ];

        host.sortApplications();

        expect(host._applications).toEqual(
            [
                {
                    apdex: 5,
                },
                {
                    apdex: 4,
                },
                {
                    apdex: 3,
                },
            ]
        );
    });
});