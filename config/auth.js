//****************THIS PAGE SHOULD BE DELETED************************

const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv').config();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Tbjs233069$",
    database: "Cocktail_Coterie"
})

exports.login = async (req, res) => {
    try {
const {email, password} = req.body;
if(!email || !password){
    return res.status(400).render('login', {
        message: 'Email and password must be entered.'
    })
}
db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) =>{
    console.log(results);
    if(!results || !(await bcrypt.compare(req.body.password, results[0].password))){
        res.status(401).render('./login', {
            message: 'Email or password is incorrect.'
        })
    } else {
        const id = results[0].id;
        const token = jwt.sign({id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        console.log("The token is " + token);

        const cookieOptions = {
            expires: new Date (
                Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
            ),
            httpOnly: true
        }
        res.cookie('jwt', token, cookieOptions);
        res.status(200).redirect("/");
    }
})
    } catch(error) {
    console.log(error);
}
}

exports.register = (req, res) => {
    console.log(req.body);

    const { firstName, lastName, email, prefDrink, zoomLink, password, passwordConfirmed} = req.body;

    db.query('SELECT email FROM users WHERE email= ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.length > 0) {
            return res.render('./register', {
                message: 'That email is already in use.'
            })
        } else if (password !== passwordConfirmed) {
            return res.render('./register', {
                message: 'Passwords do not match.'
            })
        } else{
            var salt = bcrypt.genSaltSync(10);
        var hashedPassword = await bcrypt.hash(password, salt);
        console.log(hashedPassword);

        db.query('INSERT INTO users SET ?', {firstName: firstName, lastName:lastName, email:email, prefDrink:prefDrink, zoomLink:zoomLink, password:hashedPassword, passwordConfirmed:hashedPassword}, (error, results) =>{
            if(error){
                console.log(error);
            } else {
                console.log(results);
                return res.render('./register', {
                    message: 'User registered.'
                })
            }
        })

        
    }})}
