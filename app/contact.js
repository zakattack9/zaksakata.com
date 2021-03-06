'use strict';

const AWS = require('aws-sdk');
const process = require('process');
AWS.config.update({ region: 'us-west-2' });

const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });
const sns = new AWS.SNS({ apiVersion: '2010-03-31' });

module.exports.sendInfo = (event, context, callback) => {
  console.log("hello", event.body);
  let { name, email, subject, message } = JSON.parse(event.body);
  console.log(name, email, subject, message);

  let topicARN = process.env.ARN; //environmental variable with ARN
  console.log(topicARN);

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
      console.log(err, err.stack);

      const response = {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify(err.stack)
      }
      callback(null, response);

      let snsFailParams = {
        Message:
        `
        WEBSITE MESSAGE FAILED TO STORE IN DYNAMO
        (CHECK CLOUDFRONT)
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
        `,
        MessageStructure: 'string',
        TopicArn: topicARN
      };

      sns.publish(snsFailParams, function (err, data) {
        if (err) {
          console.log(err.stack);

          const response = {
            statusCode: 500,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify(err.stack)
          }
          callback(null, response);
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
        TopicArn: topicARN
      };

      sns.publish(snsParams, function (err, data) {
        if (err) {
          console.log(err.stack);

          const response = {
            statusCode: 500,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify(err.stack)
          }
          callback(null, response);
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
