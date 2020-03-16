'use strict';

module.exports.hello = async event => {
  event.Records.forEach((record) => {
    const filename = record.s3.object.key;
    const filesize = record.s3.object.size;
    console.log(`New .pdf object has been created: ${filename} (${filesize} bytes)`);
  });
};
