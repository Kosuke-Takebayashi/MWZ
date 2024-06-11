window.onload = function() {
    // モーダルウィンドウの開閉をかく
    // 特定のクラスを付与することでモーダルウィンドウとして機能させる
    const targetImg = document.querySelector('.mwz');

    targetImg.addEventListener('click', function() {
        const el = document.createElement('div');

        document.body.insertBefore(el, null);
    })
}