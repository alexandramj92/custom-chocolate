require('dotenv').config()
const express = require('express')
const cloudinary = require('cloudinary')
const formData = require('express-form-data')

const sgMail = require('@sendgrid/mail');


const cors = require('cors')
const { CLIENT_ORIGIN } = require('./config')

const app = express()

app.use(cors({ 
  origin: CLIENT_ORIGIN 
})) 


cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
})



  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/api/email', function (req, res) {
  // res.send('POST request to the homepage')
  console.log(req.body)
  sgMail.send(req.body)

})

  

app.use(formData.parse())

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