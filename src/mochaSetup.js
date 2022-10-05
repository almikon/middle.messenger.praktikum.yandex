const {JSDOM} = require('jsdom');

const {window} = new JSDOM('<div id="app"></div>');

global.window = window;
global.document = window.document;