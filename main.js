window.onload = function () {
  const targetImg = document.querySelector(".mwz");
  let modalCloseButton;

  // ここでcanvas変数を使って描画コンテキストにアクセスし、描画する処理を追加することもできる
  // 例： var ctx = canvas.getContext('2d');

  let canvas;
  let canvasContainer = document.getElementById("canvasContainer");

  targetImg.addEventListener("click", function () {
    let img = document.createElement("img");
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

    // modalImg.addEventListener("mouseenter", createCanvas);

    modalImg.addEventListener("mousemove", handleMouseMove);

    modalCloseButton.addEventListener("click", function () {
      modal.remove();
    });

    function createCanvas() {
      // キャンバス要素の作成
      canvas = document.createElement("canvas");
      // キャンバスの幅と高さを設定（例として、400x300）
      canvas.width = 400;
      canvas.height = 300;

      // スタイルやその他の属性を設定する場合はここで行う
      var ctx = canvas.getContext("2d");

      // キャンバスをHTMLに追加する

      canvasContainer.appendChild(canvas);

      // キャンバスのサイズを設定（画像の倍率に合わせて設定）
      canvas.width = img.width * 2; // 例として、幅を2倍に拡大
      canvas.height = img.height * 2; // 例として、高さを2倍に拡大
      img.src = this.src;
      // 3. 画像を描画
      // drawImageメソッドで画像を描画
      // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
      // sx, sy, sWidth, sHeight: 元画像のどの部分を使うか指定する（今回は全体を使う）
      // dx, dy, dWidth, dHeight: キャンバスのどこに描画するかと描画するサイズを指定
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        0,
        0,
        canvas.width * 2,
        canvas.height * 2
      );

      // 画像が描画されたキャンバスをHTMLに追加
      canvasContainer.appendChild(canvas);
    }

    modalImg.addEventListener("mouseout", function () {
      modalImg.style.transform = "translate(0, 0) scale(1)";
      console.log(canvasContainer);
      canvasContainer.removeChild(canvas);
    });

    function showZoomArea() {
      const square = document.querySelector(".square");
      const container = document.querySelector(".mwz-modal-img-wrapper");

      // カーソルの位置を取得
      const x = event.clientX;
      const y = event.clientY;

      // カーソルが画面外に出ないように調整
      const containerRect = container.getBoundingClientRect();
      const squareRect = square.getBoundingClientRect();
      const containerLeft = containerRect.left;
      const containerTop = containerRect.top;
      const containerRight = containerRect.right;
      const containerBottom = containerRect.bottom;
      const squareWidth = squareRect.width;
      const squareHeight = squareRect.height;

      // カーソルの位置に正方形を移動
      square.style.left = x - squareWidth / 2 + "px";
      square.style.top = y - squareHeight / 2 + "px";

      if (x + squareWidth / 2 > containerRight) {
        square.style.left = containerRight - squareWidth + "px";
      }

      if (x - squareWidth / 2 < containerLeft) {
        square.style.left = containerLeft + "px";
      }

      if (y + squareHeight / 2 > containerBottom) {
        square.style.top = containerBottom - squareHeight + "px";
      }

      if (y - squareHeight / 2 < containerTop) {
        square.style.top = containerTop + "px";
      }
    }

    function handleMouseMove(event) {
      showZoomArea();

      // const containerWidth = containerRect.width;
      // const containerHeight = containerRect.height;

      // const imageRect = modalImg.getBoundingClientRect();
      // const imageWidth = imageRect.width;
      // const imageHeight = imageRect.height;

      // const mouseX = event.pageX;
      // const mouseY = event.pageY;

      // var img = new Image();

      // img.src = modalImg.src;
    }
  });
};
