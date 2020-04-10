
// hound -> Hound
function titleCase(text) {
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

/**
   <div id="dropdown-menu" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <!--
      We need to build menu items for all dog breeds that look like this:

      <a id="breed-name" class="dropdown-item" href="#">Breed Name</a>
      ...
    -->
  </div>
 */
function populateBreedDropdown(breeds) {
  let dropdownMenu = document.querySelector('#dropdown-menu');

  breeds.forEach(breed => {
    // <a id="breed-name" class="dropdown-item" href="#">Breed Name</a>
    let dropdownItem = document.createElement('a');
    dropdownItem.id = breed;
    dropdownItem.className = 'dropdown-item';
    dropdownItem.href = '#';
    dropdownItem.innerText = titleCase(breed); // hound --> Hound

    // Add to dropdown menu
    dropdownMenu.appendChild(dropdownItem);
  });
}


/**
  <!-- Container for our dog images -->
  <div class="container">
    <!-- Name of the dog breed we are showing -->
    <h2 id="breed-name" class="my-3">&nbsp;</h2>

    <!-- Our grid of dog images -->
    <div id="breed-grid">

      <!-- Example of a Row, Col, Img in our grid -->
      <div class="row mt-2">
        <div class="col">
          <!--
            Placeholder image using Bootstrap's responsive image classes:
            https://getbootstrap.com/docs/4.0/content/images/#responsive-images
          -->
          <img
            class="img-fluid rounded mx-auto d-block"
            src="https://images.dog.ceo/breeds/labrador/n02099712_610.jpg"
          >
        </div>
      </div>

    </div>
  </div>
*/

//  <div class="row mt-2"> ...child... </div>
function row(child) {
  let row = document.createElement('div');
  row.className = 'row mt-2';
  row.appendChild(child);
  return row;
}

// <div class="col"> ... child ... </div>
function col(child) {
  let col = document.createElement('div');
  col.className = 'col';
  col.appendChild(child);
  return col;
}

/**
  <img
    class="img-fluid rounded mx-auto d-block"
    src="https://images.dog.ceo/breeds/labrador/n02099712_610.jpg"
  >
*/
function img(url) {
  let img = new Image();
  img.className = 'img-fluid rounded mx-auto d-block';
  img.src = url;
  return img;
}

// Compose our row(), col(), and img() functions into a single call
function createGridCell(url) {
  return row(col(img(url)));
}

function showBreed(breed, images) {
  // Update the breed title
  let breedName = document.querySelector('#breed-name');
  breedName.innerText = titleCase(breed);

  // Clear the existing images from our breed grid
  let breedGrid = document.querySelector('#breed-grid');
  breedGrid.innerHTML = '';

  // Loop through all the image URLs, create a row/col/img and append to grid
  images.forEach(imageUrl => breedGrid.appendChild(createGridCell(imageUrl)));
}
