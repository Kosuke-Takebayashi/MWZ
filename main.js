window.onload = function() {
    // モーダルウィンドウの開閉をかく
    // 特定のクラスを付与することでモーダルウィンドウとして機能させる
    const targetImg = document.querySelector('.mwz');
    let modalCloseButton;
    
    targetImg.addEventListener('click', function() {
        const modal = document.createElement('div');
        const modalImg = document.createElement('img');
        modalCloseButton = document.createElement('button');
        modal.className = 'mwz-modal';
        modalImg.className = 'mwz-modal-img';
        modalCloseButton.className = 'mwz-modal-close-button';
        modalCloseButton.type = 'button';
        modalCloseButton.innerHTML = '閉じる';
        modalImg.src = this.src;
        modal.appendChild(modalImg);
        modal.appendChild(modalCloseButton);

        // モーダルウィンドウを生成
        document.body.insertBefore(modal, null);

        modalCloseButton.addEventListener('click', function() {
        console.log('OK');
        modal.remove();
    })
    })

}