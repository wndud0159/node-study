const AWS = require("aws-sdk");

AWS.config.update({ region: "us-west-2", accessKeyId: "", secretAccessKey: "" });

s3 = new AWS.S3({ apiVersion: "2006-03-01" });

s3.listBuckets(function (err, data) {
    if (err) {
        console.log("error", err);
    } else {
        console.log("success", data.Buckets);
    }
});
