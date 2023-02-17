var maindiv = document.createElement('div');
maindiv.classList.add("container");
document.body.append(maindiv);

var header = document.createElement('h1');
header.classList.add("header");
header.innerText = "MAKEUP API";
maindiv.append(header);




url = 'http://makeup-api.herokuapp.com/api/v1/products.json'

// FETCHING RESPONSE USING ASYNC/AWAIT

async function api(){
    url = 'http://makeup-api.herokuapp.com/api/v1/products.json'
    var v = fetch(url)
    try{
    var out1 = await v;
    var prom = out1.json();
    var output = await prom;

//CREATING ALL REQUIRED ELEMENTS USING DOM AND PUSHING DATAS INSIDE USING LOOP

var subdiv = document.createElement('div');
subdiv.classList.add("subdiv");
maindiv.append(subdiv);

for(let i of output){
    
   
    var image = document.createElement('img');
    // image.setAttribute('src' , `${i.image_link}`);
    image.setAttribute('src',`${i.api_featured_image}`);
    subdiv.append(image);

    var p1 = document.createElement('p');
    p1.classList.add("brand","parag");
    subdiv.append(p1);
    p1.innerText = `Brand Name : ${i.name}`;

    var p5 = document.createElement('p');
    p5.classList.add("desc","parag");
    subdiv.append(p5);
    p5.innerText = `Description : ${i.description}`;

    var p2 = document.createElement('p');
    p2.classList.add("name", "parag");
    subdiv.append(p2);
    p2.innerText = `Product Name : ${i.name}`;

    var p3 = document.createElement('p');
    p3.classList.add("price" ,"parag");
    subdiv.append(p3);
    p3.innerText = `$ ${i.price}`;

    //CREATED A BUTTON FOR PRODUCT LINK INSTEAD OF HYPERLINK

    var frm = document.createElement('form');
    var btn = document.createElement('button');
    frm.append(btn);
    btn.classList.add('btn');
    btn.setAttribute('formaction',`${i.product_link}`);
    btn.innerText="Shop Now!";
    subdiv.append(frm);

    }


}
   catch
   {
    console.log("error");
   }


}

api();

