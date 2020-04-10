/**
  Get the list of breed names out of the data Object we get back. It will
  look something like this:

    {
        status: "success",
        message: {
            affenpinscher: [],
            african: [],
            airedale: [],
            akita: [],
            appenzeller: [],
            ...
        }
    }

  We want the key names from the .message Object property
*/
function getDogBreeds(callback) {
  let xhr = new XMLHttpRequest();

  // If the xhr request works
  xhr.onload = function() {
    try {
      let data = JSON.parse(this.responseText);
      // Get only the keys from data.message and pass to the callback function
      callback(Object.keys(data.message));
    } catch(err) {
      console.error('Unable to parse breed JSON', err);
    }
  };

  // If the xhr request fails
  xhr.onerror = function() {
    console.error('Unable to get dog breed JSON');
  };

  // See https://dog.ceo/dog-api/documentation/
  let url = 'https://dog.ceo/api/breeds/list/all';
  xhr.open('GET', url);
  xhr.send();
}


/**
 * Download all breed image URLs for the given breed call callback function.
 */
function getBreedData(breed, callback) {
  let xhr = new XMLHttpRequest();

  // If the xhr request works
  xhr.onload = function() {
    try {
      let data = JSON.parse(this.responseText);
      // Get the data.message Array of URLs and pass to the callback function
      callback(data.message);
    } catch(err) {
      console.error('Unable to parse breed image JSON', err);
    }
  };

  // If the xhr request fails
  xhr.onerror = function() {
    console.error('Unable to get dog breed image JSON');
  };

  // https://dog.ceo/dog-api/documentation/breed
  let url = `https://dog.ceo/api/breed/${breed}/images`;
  xhr.open('GET', url);
  xhr.send();  
}
