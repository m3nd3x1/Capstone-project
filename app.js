$.getJSON('./data.json', function(products) {

  console.log(products)
  const container = $("#container")
  const productsarray =[]
 
  $.each(products,function(key,product){
      productsarray.push(
         `
         <div class="product">
             <h3>${product.title}</h3>
             <img src="${product.image}"/>
             <p>${product.description}</p>
             <li>${"$"+product.price}</li>
             <button>Buy</button>
         </div>
         `    
      )
  })
  container.append(productsarray) 
 })

 var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}