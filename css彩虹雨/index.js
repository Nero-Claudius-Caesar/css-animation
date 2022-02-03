function rain(amount) {
    let body = document.querySelector('body');
    let i = 0;
    while (i < amount) {
        let ele = document.createElement('i');
        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;
        // css
        ele.style.width = 0.2 + size + 'px';
        ele.style.left = posX + 'px';
        ele.style.animationDelay = delay + 's';
        ele.style.animationDuration = 1 + duration + 's';
        body.appendChild(ele);
        ++i;
    }
}

// rain()
rain(200)