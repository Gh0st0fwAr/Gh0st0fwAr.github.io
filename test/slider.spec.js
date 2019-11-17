const fs = require('fs');
const webdriverio = require('webdriverio');
const options = require('../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(30000);

beforeAll(() => {
    return client.init().url('http://localhost:7777/slider');
});

test('на странице есть кнопки "влево"/"вправо" и виден первый элемент', () => {
    return client
        .isVisible('#left')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName]).toBe(true);
            }
        })
        .isVisible('#right')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName]).toBe(true);
            }
        })
        .isVisible('.item:nth-child(1)')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName]).toBe(true);
            }
        })
        .screenshot()
        .then(screenshots => {
            for (const browserName in screenshots) {
                fs.writeFileSync(`./screenshots/slider_${browserName}_has_left_right.png`, screenshots[browserName].value, 'base64');
            }
        })
});

test('при нажатии кнопки "вправо" слайдер сдвигается влево', () => {
    return client
        .click('#right')
        .pause(500)
        .getCssProperty('.items', 'right')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName].parsed.value).toBe(100);
            }
        })
        .screenshot()
        .then(screenshots => {
            for (const browserName in screenshots) {
                fs.writeFileSync(`./screenshots/slider_${browserName}_click_right.png`, screenshots[browserName].value, 'base64');
            }
        })
        .click('#right')
        .pause(500)
        .getCssProperty('.items', 'right')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName].parsed.value).toBe(200);
            }
        })
        .screenshot()
        .then(screenshots => {
            for (const browserName in screenshots) {
                fs.writeFileSync(`./screenshots/slider_${browserName}_click_right_twice.png`, screenshots[browserName].value, 'base64');
            }
        })
});

test('при нажатии кнопки "влево" слайдер сдвигается вправо', () => {
    return client
        .click('#left')
        .pause(500)
        .getCssProperty('.items', 'right')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName].parsed.value).toBe(100);
            }
        })
        .screenshot()
        .then(screenshots => {
            for (const browserName in screenshots) {
                fs.writeFileSync(`./screenshots/slider_${browserName}_click_left.png`, screenshots[browserName].value, 'base64');
            }
        })
        .click('#left')
        .pause(500)
        .getCssProperty('.items', 'right')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName].parsed.value).toBe(0);
            }
        })
        .screenshot()
        .then(screenshots => {
            for (const browserName in screenshots) {
                fs.writeFileSync(`./screenshots/slider_${browserName}_click_left_twice.png`, screenshots[browserName].value, 'base64');
            }
        })
});

afterAll(() => {
    return client.end();
});
