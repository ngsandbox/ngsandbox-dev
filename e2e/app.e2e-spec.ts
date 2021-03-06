import "../node_modules/zone.js/dist/zone.js";
import {browser, element, by} from 'protractor';

describe('QuickStart E2E Tests', function () {

    let expectedMsg = 'Hello Angular';

    beforeEach(function () {
        browser.get('');
    });

    it('should display: ' + expectedMsg, function () {
        element(by.css('h1')).getText().then(t => expect(t).toEqual(expectedMsg));
    });

});
