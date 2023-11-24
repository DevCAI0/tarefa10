const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/dashboard', (req, res) => {
    const items = ["item a", "item b", "item c", "item d"]
    res.render('dashboard', { items })
})

app.get('/post', (req, res) => {
    const post = {
        title: 'apreder node.js',
        category: 'js',
        body: 'esse curso vai te ensinar node.JS',
        comments: 4,
    }
    res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'apreder node.js',
            category: 'js',
            body: 'esse curso vai te ensinar node.JS',
            comments: 4,
        },
        {
            title: 'apreder php',
            category: 'js',
            body: 'esse curso vai te ensinar html',
            comments: 3,
        },
        {
            title: 'apreder js',
            category: 'teste',
            body: 'esse curso vai te ensinar py',
            comments: 5,
        },
    ]
    res.render('blog', {posts})
})


app.get('/', (req, res) => {
    const user = {
        name: "Caio",
        surname: "Ribeiro",
        age: 30,
    }
    const auth = false
    const approved = true


    res.render('home', { user: user, auth, approved })
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
