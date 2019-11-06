To work locally make sure netlify-lambda is installed.


Then run: netlify-lambda build src/lambda


npm i --save-dev http-proxy-middleware


netlify-lambda serve src/lambda + gatsby develop

Oh and make sure to sign up for an unsplash api key. 

Create a config.js file at root.

Add this into the config file:

const config = {
    accessKey: <"Access Key Here">,
  }
  
  export default config
