/* filename: complex_code.js */

// This code generates a complex and creative animation using the Canvas API in HTML5

// Get the canvas element and its context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array of particles
const particles = [];
const numParticles = 50;

// Define a Particle class
class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = Math.random() * 0.05 + 0.01;
    this.distanceFromCenter = Math.random() * 50 + 100;
    this.lastMouse = { x: x, y: y };
  }

  draw(lastPoint) {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.radius;
    ctx.moveTo(lastPoint.x, lastPoint.y);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
    ctx.closePath();
  }

  update() {
    const lastPoint = { x: this.x, y: this.y };

    // Move points over time
    this.radians += this.velocity;

    // Drag effect
    this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
    this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

    // Circular motion
    this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
    this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;

    this.draw(lastPoint);
  }
}

// Create particles
for (let i = 0; i < numParticles; i++) {
  const radius = Math.random() * 2 + 1;
  const color = `hsl(${Math.random() * 360}, 50%, 50%)`;
  particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, color));
}

// Mouse listener events
const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

canvas.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

canvas.addEventListener('mouseleave', () => {
  mouse.x = canvas.width / 2;
  mouse.y = canvas.height / 2;
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
  });
}

animate();