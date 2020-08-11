const express = require('express')
const app = express()
const port = 5000
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const cookieParesr = require('cookie-parser');
const config = require('./config/key');
const { User } = require("./models/User");

// application/x-www-form-unlencoded
app.use(bodyParser.urlencoded({extended: true}));
// application/json
app.use(bodyParser.json());

mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hellow Node Js with Express Js !!')
})

app.post('/register', (req, res) => {
    
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if(err)
            return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })
})

app.post('/login', (req, res) => {
     User.findOne({ email : req.body.email }, (err, user) => {
         if(!user) {
             return res.json({
                 loginSuccess: false,
                 message: "제공된 이메일에 해당하는 유저가 없습니다."
             })
         }

         user.comparePassword(req.body.password, (err, isMatch) => {
             if(!isMatch)
                return res.json({
                    loginSuccess: false,
                    message: "비밀번호가 틀렸습니다."
                })
                user.genarateToken((err, user) => {
                    if (err)
                        return res.status(400).send(err);
                    // 토큰을 저장한다. 어디에? { 쿠키, 로컬 스토리지 }.. 각각 장단점이 있다.
                    res.cookie("x_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true,
                        userId: user._id
                    })
                })
         })

     })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})