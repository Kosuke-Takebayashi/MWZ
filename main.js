window.onload = function () {
    const targetImg = document.querySelector(".mwz");
    let modalCloseButton;
  
    targetImg.addEventListener("click", function () {
      const modal = document.createElement("div");
      const modalImgWrapper = document.createElement("div");
      const modalImg = document.createElement("img");
  
      modalCloseButton = document.createElement("button");
      modal.className = "mwz-modal";
      modalImgWrapper.className = "mwz-modal-img-wrapper";
      modalImg.className = "mwz-modal-img";
  
      modalCloseButton.className = "mwz-modal-close-button";
      modalCloseButton.type = "button";
      modalCloseButton.innerHTML = "閉じる";
  
      modalImg.src = this.src;
      modal.appendChild(modalImgWrapper);
      modalImgWrapper.appendChild(modalImg);
      modal.appendChild(modalCloseButton);
  
      document.body.insertBefore(modal, null);
  
      modalImg.addEventListener("mousemove", handleMouseMove);
  
      modalCloseButton.addEventListener("click", function () {
        modal.remove();
      });

      modalImg.addEventListener("mouseout", function () {
        modalImg.style.transform = "translate(0, 0) scale(1)";
      });
  
      function handleMouseMove(event) {
        const containerRect = modalImgWrapper.getBoundingClientRect();
        const containerWidth = containerRect.width;
        const containerHeight = containerRect.height;
  
        const imageRect = modalImg.getBoundingClientRect();
        const imageWidth = imageRect.width;
        const imageHeight = imageRect.height;
  
        const mouseX = event.pageX;
        const mouseY = event.pageY;
  
        const scaleX = 2;
        const scaleY = 2;
  
        const offsetX = (mouseX - containerRect.left - 100) * 1;
        const offsetY = (mouseY - containerRect.top - 100) * 1;
  
        modalImg.style.transformOrigin = `${(mouseX - containerRect.left) / containerWidth * 100}% ${(mouseY - containerRect.top) / containerHeight * 100}%`;
        modalImg.style.transform = `translate(${offsetX/2}px, ${offsetY/2}px) scale(${scaleX}, ${scaleY})`;
      }
    });
  };
  