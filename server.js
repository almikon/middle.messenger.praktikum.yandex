const express = require('express');
const fallback = require('express-history-api-fallback');

const app = express();
const PORT = process.env.PORT || 3000;
const root = __dirname +'/dist';
app.use(express.static(root));
app.use(fallback('index.html', { root: root }));


app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
}); 
