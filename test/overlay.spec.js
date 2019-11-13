const fs = require('fs');
const webdriverio = require('webdriverio');
const options = require('../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(30000);

beforeAll(() => {
    return client.init().url('http://localhost:7777/admin');
});

test('на странице есть кнопка "Авторизоваться"', () => {
    return client
        .isExisting('.openOverlay')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName]).toBe(true);
            }
        })
        .screenshot()
        .then(browsers => {
            for (const browserName in browsers) {
                fs.writeFileSync(`./screenshots/overlay_${browserName}_has_open.png`, browsers[browserName].value, 'base64');
            }
        });
});

test('при нажатии на "открыть" появляется оверлей', () => {
    return client
        .isExisting('.login__button')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName]).toBe(true);
            }
        })
        .screenshot()
        .then(screenshots => {
            for (const browserName in screenshots) {
                fs.writeFileSync(`./screenshots/overlay_${browserName}_has_overlay.png`, screenshots[browserName].value, 'base64');
            }
        })
});


afterAll(() => {
    return client.end();
});
