function Circle(x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}
function ceateCircle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle = new Circle(x,y,radius);
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.radius, 0 , 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill;
}
ceateCircle();