// title and author are not empty and not longer than 256 characters
const validateString = str => {
  if(str === "") return 'String is empty';
  if(str.length > 256) return 'String length is greater than 256 characters';

  return str;
};


// uri is valid
const validateUri = url => {
  let re = /www.\w+.com|net|org|uk|gov|edu|club|tv|me|singles|io|ch|at|.co.uk/;
  if(re.test(url) === false) return 'Invalid URI';

  return url;
};

// points, comments and rank are integers >= 0
const validateInteger = int => {
  if(Array.isArray(int) && int != undefined) return int.length;
  if(int === undefined) return 0;
  if(int < 0) return 'Point, comment or rank is less than 0';

  return int;
};

const validateInput = arr => {
  let printNo = parseInt(arr[2]);
  if(arr[0] != 'hackernews') {
    console.log(`Please spell "hackernews" correctly. You spelled it as: ${arr[0]}`);
    process.exit();
  };

  if(arr[1] != '--post') {
    console.log(`Please spell "--post" correctly. You typed it as: ${arr[1]}`);
    process.exit();
  };

  if(arr[2] === undefined || printNo < 1 || printNo > 100) {
    console.log(`Please input a valid number between 1 and 100`);
    process.exit();
  }

  return arr;
}


// export validation for use in server.js
module.exports = {
  validateString,
  validateUri,
  validateInteger,
  validateInput
}
