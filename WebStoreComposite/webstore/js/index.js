const products = [
  {
    name: 'Whatever',
    price: 123.44,
    img: 'img/product.jpg'
  },{
    name: 'Somethjing',
    price: 132.12,
    img: 'img/logo.svg'
  },{
    name: 'Different name',
    price: 111.11,
    img: 'img/product.jpg'
  }
];


const getProductAsHtml = (prod) => {

  // Replace article with a complete product
  return `
  <article class="product">
    <header>
      <img src="${prod.img}" alt="Product Image">
    </header>
    <h3>${prod.name}</h3>
    <p>Here is a shot of this product that might entice a user to click and add it to their cart.</p>
    <form>
      <fieldset>
        <legend>Colours</legend>
        <ul>
          <li><label><input type="radio" name="colour" value="r"> <span>Red</span></label></li>
          <li><label><input type="radio" name="colour" value="w"> <span>White</span></label></li>
          <li><label><input type="radio" name="colour" value="b"> <span>Blue</span></label></li>
        </ul>
      </fieldset>

      <fieldset>
        <legend>Sizes</legend>
        <ol>
          <li><label><input type="radio" name="size" value="m"> <span>M</span></label></li>
          <li><label><input type="radio" name="size" value="l"> <span>L</span></label></li>
          <li><label><input type="radio" name="size" value="xl"> <span>XL</span></label></li>
        </ol>
      </fieldset>

      <footer>
        <dl>
          <dt>Rating</dt>
          <dd>4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
        </dl>
        <data value="${prod.price}">${prod.price}</data>
        <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
        <button type="button"><span class="material-icons">favorite</span></button>
        <a href="#">see more</a>
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
