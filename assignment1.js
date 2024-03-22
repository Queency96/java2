const input = document.getElementById('btn');

const clickHandle = () => {
  const data = prompt('Enter data you wanted to check here');

  if (typeof data === 'undefined' || data === '') {
    alert('Please enter a valid data.');
  }
  // Check if the data is a number
  else if (Number(data)) {
    document.getElementById('result').innerHTML = 'Input is a "Number"';
  }
  // Check if the data is a string
  else if (typeof data === 'string') {
    document.getElementById('result').innerHTML = 'Input is a "String"';
  }
  // If none of the above conditions match, assume it's some other type
  else {
    document.getElementById('result').innerHTML =
      'Input is of some other type.';
  }
};

input.addEventListener('click', clickHandle);
