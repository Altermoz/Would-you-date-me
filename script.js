var noClickCount = 0;
document.getElementById('noButton').addEventListener('click', function() {
    noClickCount++;
    if (noClickCount == 1) {
        document.getElementById('yesButton').style.fontSize = '30px';
    } else if (noClickCount == 2) {
        this.style.fontSize = '10px';
        document.getElementById('yesButton').style.fontSize = '40px';
    } else if (noClickCount == 3) {
        document.getElementById('yesButton').style.fontSize = '90px';
        this.style.fontSize = '7px';
    } else if (noClickCount == 4) {
        this.style.display = 'absolute';
        this.style.left = Math.random() * window.innerWidth + 'px';
        this.style.top = Math.random() * window.innerHeight + 'px';
    } else if (noClickCount >= 5 && noClickCount < 10) {
        this.style.position = 'absolute';
        this.style.left = Math.random() * window.innerWidth + 'px';
        this.style.top = Math.random() * window.innerHeight + 'px';
    } else if (noClickCount >= 10 && noClickCount < 15) {
        this.style.position = 'absolute';
        this.style.left = Math.random() * window.innerWidth + 'px';
        this.style.top = Math.random() * window.innerHeight + 'px';
        document.getElementById('message').innerText = 'Are you sure?';
        document.getElementById('message').style.position = 'absolute';
        document.getElementById('message').style.left = this.style.left;
        document.getElementById('message').style.top = parseFloat(this.style.top) + 50 + 'px';
    } else if (noClickCount == 15) {
        document.getElementById('message').innerText = 'Oh No! You brok the button :c';
        this.disabled = true;
        this.style.color = grey;
        document.getElementById('message').innerText = 'Oh No! You brok the button :c';
    }
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('question').innerText = 'SAN DATE NATIN? OTW';
    for (var i = 0; i < 100; i++) {
        var heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(heart);
    }
    document.getElementById('yesButton').style.display = 'none';
    document.getElementById('noButton').style.display = 'none';
});