const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const passport = require('passport')

// enter login page
router.get('/login', (req, res) => {
  res.render('login')
})
// login function 加入 middleware，驗證 request 登入狀態
router.post('/login', passport.authenticate('local' , {
  successRedirect: '/',
  failureRedirect: '/users/login'
}))
// enter register page
router.get('/register', (req, res) => {
  res.render('register')
})
// register function
router.post('/register', (req, res) => {
  // 取得註冊表單參數
  const { name, email, password, confirmPassword } = req.body
  // 檢查是否註冊
  User.findOne({ email })
    .then(user => {
      // 如果已經註冊，返回
      if (user) {
        console.log('User already exists')
        res.render('register', {
          name,
          email,
          password,
          confirmPassword
        })
        // 如果還沒，寫入資料庫
      } else {
        return User.create({
          name,
          email, password
        })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
      }
    })
})

module.exports = router