const express = require('express');
const app = express();
const port = 5000;

const config = require('./config/key.js')

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true    
}).then(() => console.log('mongoDB Connected..'))
.catch((err) => console.log(err))

const { User } = require('./models/Users');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));  // application/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져올 수 있게 해줌
app.use(bodyParser.json()); // application/json 타입을 분석해서 가져올 수 있게 해줌

const cookieParser = require('cookie-parser');

app.use(cookieParser());

const { auth } = require('./middleware/auth.js');

// Register Router
// 회원가입할 떄 필요한 정보들을 client에서 가져오면 그것들을 db에 넣어준다.
app.post('/api/users/register', (req, res) => {

    const user = new User(req.body);    // userModel을 가져와야함.

    user.save((err, userInfo) => {
        if(err) return res.json({registerSuccess : false, err})
        return res.status(200).json({
            registerSuccess : true
        })
    })
})

// Login Router
app.post('/api/users/login', (req, res) => {
    // 요청된 이메일을 db에서 찾음
    User.findOne({ email : req.body.email}, (err,user) => {
        if(!user) {
            return res.json({
                loginSuccess : false,
                errReason : 'NoEmail',
                message : '제공된 이메일이 없습니다.'
            })
        }
    // 요청된 이메일이 db에 있다면, pw가 맞는지 확인
        user.comparePassword(req.body.password, (err, isMatch) =>{
            if(!isMatch) {
                return res.json({ loginSuccess : false, errReason : 'WrongPassword', message : "비밀번호가 틀렸습니다." })
            }
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err)

                // 토큰을 저장한다 어디에? : 쿠키 or 로컬스토리지
                res.cookie("x_auth", user.token)
                .status(200).json({ loginSuccess : true, userId : user._id })
            })
        })
    })
    // pw까지 맞다면, 토큰을 생성하기
})

// Auth Router
app.get('/api/users/auth', auth, (req, res) => {

    // 여기까지 미들웨어를 통과했다는 이야기는 authentication이 트루
    res.status(200).json({
        _id : req.user._id,
        isAdmin : req.user.role === 0 ? false : true,
        isAuth : true,
        email : req.user.email,
        name : req.user.name,
        lastname : req.user.lastname,
        role : req.user.role,
        image : req.user.image
    })
})

// Logout Router
// 토큰을 빼주는 작업 : auth에 의해서 다음 페이지로 진입 불가
app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate({ _id : req.user._id }, { token : "" }, (err, user) => {
        if(err) return res.json({success : false, err});
        return res.status(200).send({
            success : true
        })
    })   
})




app.get('/api/hello', (req, res) => {
    res.send('hello hello')
})

app.get('/', (req, res) => {
    res.send('HELLO World')
});

app.listen(port, () => {
    console.log(`Exmaple app listening on port ${port}`);
});

