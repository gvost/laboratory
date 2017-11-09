const Express = require('express')
const App = Express()
const path = require('path')

App.use(Express.static('static'))

App.get('/', (req, res) => {
  res.render('index.pug')
})
App.get('/tst', (req, res) => {
  res.render('index.pug')
})

App.listen(3000, () => {
  console.log('listening')
})
