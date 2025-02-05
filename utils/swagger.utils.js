const swaggerJSDoc = require("swagger-jsdoc");
const {Options} =require("swagger-jsdoc");
const swaggerUI =require("swagger-ui-express");

const swaggerOptions={
    swaggerDefinition:{
        info:{
            title:'SHAKTHI_NEWS',
            version:'1.0.0',
            description:'Backend of SHAKTHI_NEWS APP',
            contact:{
                name:'Shakthivel Arumugam',
                email:'shaktivel888@gmail.com'
            },
        },
    },
    apis:['./routes/*.js'],
};

const swaggerDocs=swaggerJSDoc(swaggerOptions);
const setup=swaggerUI.setup(swaggerDocs);
const serve=swaggerUI.serve;

module.exports={setup,serve};