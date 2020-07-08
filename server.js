require('dotenv').config()
const express = require('express')
const cloudinary = require('cloudinary')
const formData = require('express-form-data')


const sendGrid = require('@sendGrid/mail');


const cors = require('cors')
const { CLIENT_ORIGIN } = require('./config')

const app = express()

app.use(cors({ 
  origin: CLIENT_ORIGIN 
})) 

app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!


app.use(formData.parse())


cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
})

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.get('/api', (req, res, next) => {
  res.send('API Status: I\'m awesome')
});



  app.post('/api/email', (req, res, next) => {

    console.log(req.body);

    sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'garrettlove5346@gmail.com',
        from: 'test@gmail.com',
        subject: 'Website Contact',
        text: req.body
    }

    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });

        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });
});

// app.post('/api/email', function (req, res) {
//   // res.send('POST request to the homepage')
//   console.log(req.body)
//   sgMail.send(req.body)

// })



app.get('/wake-up', (req, res) => res.send('👌'))

app.post('/image-upload', (req, res) => {

  const values = Object.values(req.files)
  const promises = values.map(image => cloudinary.uploader.upload(image.path))
  
  Promise
    .all(promises)
    .then(results => res.json(results))
    .catch((err) => res.status(400).json(err))
})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  
  app.use(express.static("client/build"));
}

app.listen(process.env.PORT || 8080, () => console.log('👍'))