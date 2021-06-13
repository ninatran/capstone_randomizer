//Fetch colors on load
let randomcolors = fetchColorsFromAPI();

/**
 * Function fetches four random colors from the colors_api
 * @return {Array<String>} randomcolors
 */
function fetchColorsFromAPI(){
    let randomcolors = new Array(4);

    let colors_api = "https://www.thecolorapi.com/scheme?hex=" +randomHex()+"&format=json&count=4&mode=analogic";
    // API for get requests

    const fetchRes = fetch(colors_api);

    // fetchRes is the promise to resolve it by using.then() method
          fetchRes.then(res =>
              res.json()).then(d => {
                for(i = 0; i < 4; i++){
                  randomcolors[i] = d.colors[i].hex.value;
                }
              });
    return randomcolors;
}

/**
 * Function runs randomizes all categories
 */
function randomize(){
  getRandomClient();
  getRandomColors();
  getRandomBusiness();
  getRandomWireFrame();
}

/**
 * Function displays random business type and stock photos
 */
function getRandomClient(){
  let random_index = Math.floor(Math.random() * clients.length);
  document.getElementById("client").innerHTML = clients[random_index];
}

/**
 * Function displays random business type and stock photos
 */
function getRandomBusiness(){

  let random_business = Math.floor(Math.random() * businesses.length);
  document.getElementById("business").innerHTML = businesses[random_business].type;

  //Generate four random pictures
  getRandomImages(4, random_business);
}

/**
 * Function displays random images based on business type
 * @param number number of images
 * @param number index of business
 */
function getRandomImages(number, business){
    const container = document.getElementById("stock");
    //Clear existing images
    container.innerHTML = "<h1>Stock Images:</h1>";

    //Create a copy of images
    let imgList = new Array(businesses[business].imgs.length);
    for(let i = 0; i < imgList.length; i++){
        imgList[i] = businesses[business].imgs[i];
    }

    for(let i = 0; i < number; i ++){

        const new_img = document.createElement("img");
        let random_image_index = Math.floor(Math.random() * imgList.length);
        new_img.src = imgList.splice([random_image_index],1);

        container.appendChild(new_img);
    }

}


function getRandomWireFrame(){
  let random_index = Math.floor(Math.random() * wireframes.length);
  let wf_containers = document.getElementsByClassName("wf");
  wf_containers[0].src = wireframes[random_index];
  random_index = Math.floor(Math.random() * wireframes.length);
  wf_containers[1].src = wireframes[random_index];
}

//Generate random color palette
function getRandomColors(){

    document.getElementById("color0").style.backgroundColor = randomcolors[0];
    document.getElementById("color1").style.backgroundColor = randomcolors[1];
    document.getElementById("color2").style.backgroundColor = randomcolors[2];
    document.getElementById("color3").style.backgroundColor = randomcolors[3];

    randomcolors = fetchColorsFromAPI();

}

function randomHex(){
  let letters = '0123456789ABCDEF'.split('');
  let color = '';
  for (let i = 0; i < 6; i++ ) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}
