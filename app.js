const snowContainer = document.querySelector('.snow-container');
const createSnow= () => {
    // 雪の生成
    let snow = document.createElement('span');
    snow.className = 'snow';
    // console.log(snow);
    minSize = 5;
    maxSize = 10;
    
    // 雪の大きさをランダムに決める
    let snowSize = Math.random() * (maxSize - minSize) + minSize;

    snow.style.width = snowSize + 'px';
    snow.style.height = snowSize + 'px';
    // console.log(snowSize);

    // 雪の降る位置
    snow.style.left = Math.random() * 100 + '%';
    snowContainer.appendChild(snow);

    // 10秒後に雪を消す
    setTimeout(() => {
        snow.remove(); 
    }, 10000);
}

// 関数を0.1秒毎に呼び出す
setInterval(createSnow, 100);