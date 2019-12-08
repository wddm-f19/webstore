const products = [
  {
    name: 'iPhone 11',
    price: 699.99,
    img: 'img/iphone/iphone11.png'
  },{
    name: 'iPhone XR',
    price: 599.99,
    img: 'img/iphone/iphonexr.png'
  },{
    name: 'iPhone X',
    price: 849.99,
    img: 'img/iphone/iphonex.png'
  },{
    name: 'iPhone 8',
    price: 449.99,
    img: 'img/iphone/iphone8.png'
  },{
    name: 'iPhone 11 Pro',
    price: 999.99,
    img: 'img/iphone/iphone11pro.png'
  },{
    name: 'iPhone 11 Pro Max',
    price: 1099,
    img: 'img/iphone/iphone11promax.png'
  },{
    name: 'iPhone XS',
    price: 1379,
    img: 'img/iphone/iphonexs.png'
  },{
    name: 'iPhone XS Max',
    price: 1519,
    img: 'img/iphone/iphonexsmax.png'
  },{
    name: 'iPad Air',
    price: 649.99,
    img: 'img/iphone/ipadair.png'
  },{
    name: 'iPad Pro',
    price: 799.99,
    img: 'img/iphone/ipadpro.png'
  },{
    name: 'Samsung S10 Plus',
    price: 1459,
    img: 'img/samsung/samsungs10plus.png'
  },{
    name: 'Samsung S10',
    price: 1219,
    img: 'img/samsung/samsungs10.png'
  },{
    name: 'Samsung S9',
    price: 859.99,
    img: 'img/samsung/samsungs9.png'
  },{
    name: 'Samsung S9 Plus',
    price: 1219,
    img: 'img/samsung/samsungs9plus.png'
  },{
    name: 'Samsung S8',
    price: 719.99,
    img: 'img/samsung/samsungs8.png'
  },{
    name: 'Samsung S8 Plus',
    price: 1115,
    img: 'img/samsung/samsungs8plus.png'
  },{
    name: 'Samsung Note 10 ',
    price: 1259,
    img: 'img/samsung/samsungnote10.png'
  },{
    name: 'Samsung Note 10 Plus',
    price: 1459,
    img: 'img/samsung/samsungnote10plus.png'
  },{
    name: 'Samsung Note 9',
    price: 999.99,
    img: 'img/samsung/samsungnote9.png'
  },{
    name: 'Samsung Note 8',
    price: 749.99,
    img: 'img/samsung/samsungnote8.png'
  }
  
];



const getProductAsHtml = (prod) => {

  // Replace article with a complete product 
  return `
  <article class="product">
    <header class="image">
      <img src="${prod.img}" alt="Product Image">
    </header>
    <h3>${prod.name}</h3> <hr width="100%">
    <p class="info">A nice picture of the product.</p>

    <form>
    <fieldset>
      <data class="price" value="${prod.price}">${prod.price}</data>
      <button class="cartbtn" type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
      <button class="favbtn" type="button"><span class="material-icons">favorite</span></button>
    </footer>
  </form> 
   

  </article>`;
}


const renderProducts = (arr) => {

  document.getElementById('products').innerHTML = arr.map(getProductAsHtml).join('');

}


renderProducts(products)












/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
// window.onclick = function(e) {
window.addEventListener('click', e => {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    myDropdown.classList.toggle('show')
  }
});

