const {JSDOM} = require('jsdom');
const fs = require('fs');
const Handlebars = require('handlebars');

const {window} = new JSDOM('<div id="app"></div>',{
    url: 'http://localhost:3000'
});

global.window = window;
global.document = window.document;
global.DocumentFragment = window.DocumentFragment;

require.extensions['.hbs'] = function (module, filename){
    const content = fs.readFileSync(filename, 'utf-8');
    module.exports = Handlebars.compile(content);
}