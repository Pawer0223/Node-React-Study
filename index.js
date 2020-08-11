const express = require('express')
const app = express()
const port = 5000
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const { auth } = require("./middleware/auth");
const { User } = require("./models/User");

// application/x-www-form-unlencoded
app.use(bodyParser.urlencoded({extended: true}));
// application/json
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hellow Node Js with Express Js !!')
})

app.post('/api/users/register', (req, res) => {
    
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if(err)
            return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })
})

app.post('/api/users/login', (req, res) => {
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

// req받은 후, callback function 호출 전 수행되는 함수.. auth !
app.get('/api/users/auth', auth, (req, res) => {
    
    // middle ware를 통과 해야지 하위 코드를 탈 수 있음 !
    res.status(200).json({
        _id: req.user._id,
        // 0아니면 admin.. (뭔가 이상하긴하지만..ㅎㅎ)
        isAdmin: req.user.role === 0 ? false : true,
        isAuth : true,
        email: req.user.email,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    })
})

app.get('/api/users/logout', auth, (req, res) => {

    User.findOneAndUpdate(
        {_id: req.user._id},
        {token : ""},
        (err, user) => {
            if (err)
                return res.json({ success: false, err });
                return res.status(200).send({
                    success: true
                })
        }
    )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})