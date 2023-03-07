<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Display Images</title>
    <style>
      /* Slideshow container */
      .slideshow-container {
        max-width: 500px;
        position: relative;
        margin: auto;
      }

      /* Hide the images by default */
      .mySlides {
        display: none;
      }

      /* Next and previous buttons */
      .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        margin-top: -22px;
        padding: 16px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
      }

      /* Position the next button to the right */
      .next {
        right: 0;
        border-radius: 3px 0 0 3px;
      }

      /* On hover, add a black background color with a little bit see-through */
      .prev:hover, .next:hover {
        background-color: rgba(0,0,0,0.8);
      }

      /* Caption text */
      .text {
        color: #f2f2f2;
        font-size: 15px;
        padding: 8px 12px;
        position: absolute;
        bottom: 8px;
        width: 100%;
        text-align: center;
      }

      /* Number text (1/3 etc) */
      .numbertext {
        color: #f2f2f2;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
      }

      /* The dots/bullets/indicators */
      .dot {
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
      }

      .active, .dot:hover {
        background-color: #717171;
      }

      /* Fading animation */
      .fade {
        -webkit-animation-name: fade;
        -webkit-animation-duration: 1.5s;
        animation-name: fade;
        animation-duration: 1.5s;
      }

      @-webkit-keyframes fade {
        from {opacity: .4} 
        to {opacity: 1}
      }

      @keyframes fade {
        from {opacity: .4} 
        to {opacity: 1}
      }
    </style>
  </head>
<body>
  <h1>Form Data</h1>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>Images</th>
      </tr>
    </thead>
    <tbody>
      <c:forEach var="formData" items="${formDataList}">
        <tr>
          <td>${formData.id}</td>
          <td>${formData.title}</td>
          <td>${formData.description}</td>
          <td>
            <c:forEach var="imageData" items="${imageDataList}">
              <c:if test="${imageData.form_id == formData.id}">
                <img class="mySlides_${formData.id}" src="${pageContext.request.contextPath}/images/${formData.id}/${imageData.image_name}">
              </c:if>
            </c:forEach>
            <div class="dots_${formData.id}">
              <c:forEach var="imageData" items="${imageDataList}">
                <c:if test="${imageData.form_id == formData.id}">
                  <span class="dot_${formData.id}"></span>
                </c:if>
              </c:forEach>
            </div>
          </td>
        </tr>
      </c:forEach>
    </tbody>
  </table>

  <script>
   // Add slideshow functionality for each form data row
<c:forEach var="formData" items="${formDataList}">
  var slideIndex_${formData.id} = 1;
  showSlides_${formData.id}(slideIndex_${formData.id});

  function plusSlides_${formData.id}(n) {
    showSlides_${formData.id}(slideIndex_${formData.id} += n);
  }

  function currentSlide_${formData.id}(n) {
    showSlides_${formData.id}(slideIndex_${formData.id} = n);
  }

  function showSlides_${formData.id}(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides_${formData.id}");
    var dots = document.getElementsByClassName("dot_${formData.id}");
    var dotsContainer = document.getElementsByClassName("dots_${formData.id}")[0];
    if (n > slides.length) {slideIndex_${formData.id} = 1}
    if (n < 1) {slideIndex_${formData.id} = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex_${formData.id}-1].style.display = "block";
    dots[slideIndex_${formData.id}-1].className += " active";

    // Hide dots container if only one image
    if (dots.length <= 1) {
      dotsContainer.style.display = "none";
    }
  }

  // Attach event listeners for slideshow navigation
  var prev = document.getElementsByClassName("prev_${formData.id}")[0];
  var next = document.getElementsByClassName("next_${formData.id}")[0];
  prev.addEventListener('click', function() { plusSlides_${formData.id}(-1); });
  next.addEventListener('click', function() { plusSlides_${formData.id}(1); });
  var dots = document.getElementsByClassName("dot_${formData.id}");
  for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function() {
    currentSlide_${formData.id}(parseInt(this.getAttribute('data-index')));
    });
}
}
</script>

</body>
</html>
