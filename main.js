window.onload = function () {
  // モーダルウィンドウの開閉をかく
  // 特定のクラスを付与することでモーダルウィンドウとして機能させる
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

    // モーダルを生成
    document.body.insertBefore(modal, null);

    modalImg.addEventListener("mouseover", function () {
      modalImg.style.scale = "2";
    });

    modalImg.addEventListener("mouseout", function () {
      modalImg.style.scale = "1";
    });

    modalCloseButton.addEventListener("click", function () {
      console.log("OK");
      modal.remove();
    });
  });
};
