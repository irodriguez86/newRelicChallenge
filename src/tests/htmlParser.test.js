import HtmlParser from '../js/htmlParser/htmlParser';
import Application from "../js/classes/application";

describe('HtmlParser', () => {
    it('method renderApplications', () => {
        const app = new Application(
            'application name',
            ['contrib 1', 'contrib2'],
            6,
            75
            );
        const applications = [app];
        const template = `
        <div class="application" data-release="6">
            <div class="app-apdex">75</div>
            <div class="app-name">application name</div>
        </div>
        `;
        expect(HtmlParser.renderApplications(applications)).toBe(template);
    });
});