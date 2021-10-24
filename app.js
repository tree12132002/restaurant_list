// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
const session = require('express-session')
const methodOverride = require('method-override')
const routes = require('./routes') // 引用路由器

const usePassport = require('./config/passport')

require('./config/mongoose')

// setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))

// setting static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

usePassport(app)

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  next()
})

app.use(routes) // 將 request 導入路由器

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})