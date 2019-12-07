const products = [
  {
    name: 'Product 1',
    price: 123.44,
    img: 'img/product.jpg'
  },{
    name: 'Product 2',
    price: 132.12,
    img: 'img/product.jpg'
  },{
    name: 'Product 3',
    price: 111.11,
    img: 'img/product.jpg'
  },{
    name: 'Product 4',
    price: 111.11,
    img: 'img/product.jpg'
  }
];



const getProductAsHtml = (prod) => {

  // Replace article with a complete product 
  return `
  <article class="product">
    <header class="image">
      <img src="${prod.img}" alt="Product Image">
    </header>
    <h3>${prod.name}</h3> <hr width="80%">
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
