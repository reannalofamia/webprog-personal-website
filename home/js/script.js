
function openModal(image) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("fullImage");
    var caption = document.getElementById("caption");
  
    modal.style.display = "block";
    modalImg.src = image.src;
    caption.innerHTML = image.alt;
  }
  

  function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }

  
