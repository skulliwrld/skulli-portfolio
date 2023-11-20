import emailjs from 'emailjs-com';

export const  sendEmail = (templateParams) => {
  emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams, process.env.PUBLIC_KEY)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (error) => {
      console.log('FAILED...', error);
    });
}