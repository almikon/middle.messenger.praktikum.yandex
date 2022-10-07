const {JSDOM} = require('jsdom');
const Handlebars = require('handlebars');

const {window} = new JSDOM('<html><body><div id="app"></div></body></html>',{
    url: 'http://localhost:3000'
});

global.window = window;
global.document = window.document;

require.extensions['.hbs'] = function (module, content){
    module.exports = () => Handlebars.compile(content);
}