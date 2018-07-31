'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });
const sns = new AWS.SNS({apiVersion: '2010-03-31'});

module.exports.sendInfo = (event, context, callback) => {
  console.log("hello", event.body);
  let { name, email, subject, message } = JSON.parse(event.body);
  console.log(name, email, subject, message);

  var dynamoParams = {
    Item: {
      "Name": {
        S: name
      },
      "Email": {
        S: email
      },
      "Subject": {
        S: subject
      },
      "Message": {
        S: message
      }
    },
    TableName: "ContactInfo"
  };

  dynamodb.putItem(dynamoParams, (err, data) => {
    if (err) {
      console.log(err, err.stack); // an error occurred
    } else {
      let snsParams = {
        Message: 
        `
        NEW CONTACT MESSAGE
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
        `,
        MessageStructure: 'string',
        TopicArn: ""
      };

      sns.publish(snsParams, function(err, data) {
        if (err) {
          console.log("Error", err.stack); 
        } else {
          console.log("Success", data);
          
          const response = {
            statusCode: 200,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify(data)
          }
          callback(null, response);
        } 
      })

    }          
    
  });

  // const response = {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: 'Go Serverless v1.0! Your function executed successfully!',
  //     input: event,
  //   }),
  // };

  // callback(null, response);

};
