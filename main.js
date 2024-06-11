window.onload = function() {
    // モーダルウィンドウの開閉をかく
    // 特定のクラスを付与することでモーダルウィンドウとして機能させる
    const targetImg = document.querySelector('.mwz');
    const modal = document.createElement('div');
    const modalImg = document.createElement('img');
    modal.className = 'mwz-modal';
    modalImg.className = 'mwz-modal-img';
    
    targetImg.addEventListener('click', function() {
        modalImg.src = this.src;
        modal.appendChild(modalImg);

        // モーダルウィンドウを生成
        document.body.insertBefore(modal, null);
    })
}