const apiUrl = "https://api.nasa.gov/planetary/apod?count=1";
const apiKey = "TD8p1pB8OeqIpfZhWrKMSeb7AmiOrnJyqqeQeUQS";
const nextImageButton = document.querySelector(".nextImageButton");
const imageDisplay = document.querySelector(".imageDisplay");
const favoriteImages = document.querySelector(".favoriteImages");

function displayLoading() {
  
}

async function getImage() {
  try {
    const response = await fetch(`${apiUrl}&api_key=${apiKey}`);
    
    const data = await response.json();
    return data[0].url;
  } catch (error) {
    throw new Error("Não foi possível obter a imagem.");
  }
}

function displayImage(imageUrl) {
  const imageElement = document.createElement("img");
  imageElement.src = imageUrl;
  imageElement.classList.add("image");
  imageDisplay.innerHTML = "";
  imageElement.addEventListener("click", () => {
    const saveOnFavorites = confirm("Salvar nos favoritos?");
    if (saveOnFavorites) {
      saveFavoriteImage(imageUrl);
    }
  });
  imageDisplay.appendChild(imageElement);
}


function saveFavoriteImage(imageUrl) {
  const favoriteImagesList =
    JSON.parse(localStorage.getItem("favoriteImages")) || [];
  favoriteImagesList.push(imageUrl);
  localStorage.setItem(
    "favoriteImages",
    JSON.stringify(favoriteImagesList)
  );
}

function displayFavoriteImages() {
  const favoriteImagesList =
    JSON.parse(localStorage.getItem("favoriteImages")) || [];
  // favoriteImages.innerHTML = "<h3>Imagens curtidas</h3>";

  for (const imageUrl of favoriteImagesList) {
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageElement.classList.add("image");
    favoriteImages.appendChild(imageElement);
  }
}

async function loadImage() {
  try {
    nextImageButton.disabled = true;
    const imageUrl = await getImage();
    displayImage(imageUrl);
    nextImageButton.style.display = "inline-block";
  } catch (error) {
    alert(error.message);
  } finally {
    nextImageButton.disabled = false;
  }
}

window.addEventListener("load", loadImage)

nextImageButton.addEventListener("click", loadImage);

displayFavoriteImages();