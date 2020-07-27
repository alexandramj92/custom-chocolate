# Chocolate Bar Customizer

## Description

Web application that allows customers to personalize their chocolate bar wrapper. They can choose the logo, the wrapper design, a personal message, font family, and font color. They can see a preview as they make their selections and drag the logo and message around to their desired position. As they checkout, a snapshot of the preview is taken to show the client the positioning the customer chose. All the form information, the url of the uploaded design, and the preview snapshot are sent to the client in an email. 

## Technology

- React
- JavaScript
- Express
- Node
- Sass
- Cloudinary
- Mailgun
- EmailJS

## Demo

![Demo of Application](client/src/assets/demo/demo-chocolate.gif)

## Instructions

- Clone repo
- Create Mailgun, EmailJS, and Cloudinary accounts
- Add Mailgun as a service on EmailJS and input the Mailgun API and domain
- Create email template in EmailJS that contains the following
![Email Template](client/src/assets/demo/email-template.JPG)

- Add .env file to root directory that contains the following
![Env file in root directory](client/src/assets/demo/root-env.JPG)

- Add .env file to client folder that contains the following
![Env file in client folder](client/src/assets/demo/client-env.JPG)

## Contributors

- @stephmarie17
- @alexandramj92
