const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// const pug = require('pug');
// const expressHbs = require('express-handlebars');
// const ejs = require('ejs');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// app.set('view engine', 'pug');
// app.engine(
//     'hbs',
//     expressHbs({
//         layoutsDir: 'views/layouts',
//         defaultLayout: 'main-layout',
//         extname: 'hbs'
//     })
// );
// app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res) => {
    res.status(404)
    // .sendFile(path.join(__dirname, 'views', '404.pug'));
    res.render('404', { pageTitle: 'Page Not Found!' });
});

const PORT = 3000;

app.listen(PORT);
console.log('server listening on port', PORT);