
var express = require('express');
var expressVue = require('express-vue');
var app = express();
var items = require('./database.json');

app.use(express.static(__dirname + '/assets'));

app.engine('vue', expressVue);
app.set('view engine', 'vue');
app.set('views', __dirname + '/views');
app.set('vue', {
    componentsDir: __dirname + '/components',
    defaultLayout: 'layout'
});

var randomItem = function () {
    return items[Math.floor(Math.random()*(items.length))];
}

app.get('/', function (req, res) {
    var item = randomItem();
    res.render('index', {
        data: {
            name: item.name,
            job: item.job,
            location: item.location
        },
        vue: {
            mixins: [{
                methods: {
                    update: function(){
                        this.$http.get('/api/item').then(response => {
                            this.name = response.body.name;
                            this.job = response.body.job;
                            this.location = response.body.location;
                        }, response => {
                            console.log(response);
                        });
                    }
                }
            }]
        }
    });
});

app.get('/api/item', function (req, res) {
    res.status(200).send(randomItem());
});

app.listen(3000, function () {
    console.log('Lincretin app listening on port 3000!');
});