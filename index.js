var AWS = require('aws-sdk');
AWS.config.update({region: 'eu-west-2'});

var params = {
  InstanceIds: [
     "i-0e62608840dfb9e89",
     "i-03b82a7bcf399cf99",
     "i-063d8469b0f9b4467"
  ]
 };
 
exports.handler =  (event) => {
    var ec2 = new AWS.EC2();
    return new Promise((resolve, reject) => {
        ec2.stopInstances(params, function(err, data) {
            if (err) {
                console.log(err, err.stack);
                reject(err);
            } else {
                console.log(data);
                resolve({body: JSON.stringify(data), statusCode: 200});
            }
        });
    });
};
