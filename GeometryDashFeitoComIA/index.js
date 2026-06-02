const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const menu = document.getElementById('menu');
const scoreEl = document.getElementById('score');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

let gravity = 0.85;
let gameSpeed = 8;
let score = 0;
let running = false;
let particles = [];
let obstacles = [];
let lines = [];

const player = {
  x: 180,
  y: 0,
  size: 42,
  velY: 0,
  grounded: false,
  rotation: 0
};

function groundY() {
  return canvas.height - 180;
}

function reset() {
  score = 0;
  gameSpeed = 8;
  obstacles = [];
  particles = [];
  lines = [];

  player.y = groundY() - player.size;
  player.velY = 0;
  player.rotation = 0;
}

function jump() {
  if (player.grounded && running) {
    player.velY = -16;
    player.grounded = false;
    shake = 8;

    for(let i = 0; i < 12; i++) {
      particles.push({
        x: player.x + player.size / 2,
        y: player.y + player.size,
        vx: (Math.random() - .5) * 8,
        vy: Math.random() * -5,
        life: 30,
        size: Math.random() * 5 + 2
      });
    }
  }
}

window.addEventListener('keydown', e => {
  if (e.code === 'Space') jump();
});

window.addEventListener('mousedown', jump);
window.addEventListener('touchstart', jump);

let shake = 0;

function spawnObstacle() {
  const h = Math.random() * 80 + 40;

  obstacles.push({
    x: canvas.width + 100,
    y: groundY() - h,
    w: Math.random() * 30 + 30,
    h
  });
}

setInterval(() => {
  if (running) spawnObstacle();
}, 1300);

function drawBackground() {
  ctx.save();

  ctx.strokeStyle = 'rgba(0,255,255,.08)';
  ctx.lineWidth = 1;

  for(let i = 0; i < canvas.width; i += 80) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();
  }

  for(let i = 0; i < canvas.height; i += 80) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
  }

  ctx.restore();
}

function drawGround() {
  ctx.save();

  ctx.fillStyle = '#0ff';
  ctx.shadowBlur = 20;
  ctx.shadowColor = '#0ff';

  ctx.fillRect(0, groundY(), canvas.width, 6);

  ctx.restore();
}

function drawPlayer() {
  ctx.save();

  ctx.translate(player.x + player.size / 2, player.y + player.size / 2);
  ctx.rotate(player.rotation);

  ctx.fillStyle = '#fff';
  ctx.shadowBlur = 25;
  ctx.shadowColor = '#0ff';

  ctx.fillRect(-player.size / 2, -player.size / 2, player.size, player.size);

  ctx.strokeStyle = '#0ff';
  ctx.lineWidth = 3;

  ctx.strokeRect(-player.size / 2, -player.size / 2, player.size, player.size);

  ctx.restore();
}

function drawObstacles() {
  obstacles.forEach(o => {
    ctx.save();

    ctx.beginPath();
    ctx.moveTo(o.x, o.y + o.h);
    ctx.lineTo(o.x + o.w / 2, o.y);
    ctx.lineTo(o.x + o.w, o.y + o.h);
    ctx.closePath();

    ctx.fillStyle = '#ff006e';
    ctx.shadowBlur = 25;
    ctx.shadowColor = '#ff006e';

    ctx.fill();

    ctx.restore();
  });
}

function updateParticles() {
  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    p.life--;

    ctx.save();

    ctx.globalAlpha = p.life / 30;
    ctx.fillStyle = '#0ff';
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#0ff';

    ctx.fillRect(p.x, p.y, p.size, p.size);

    ctx.restore();

    if(p.life <= 0) {
      particles.splice(i, 1);
    }
  });
}

function collision(a, b) {
  return (
    a.x < b.x + b.w &&
    a.x + a.size > b.x &&
    a.y < b.y + b.h &&
    a.y + a.size > b.y
  );
}

function gameOver() {
  running = false;
  menu.style.display = 'flex';

  document.querySelector('.title').innerText = 'GAME OVER';
  document.querySelector('.subtitle').innerText = 'PONTUAÇÃO: ' + Math.floor(score);
}

function startGame() {
  reset();
  running = true;
  menu.style.display = 'none';

  document.querySelector('.title').innerText = 'NEON DASH';
  document.querySelector('.subtitle').innerText = 'GEOMETRY STYLE • PROCEDURAL • MINIMALISTA';
}

function update() {
  requestAnimationFrame(update);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if(shake > 0) {
    shake -= .4;
  }

  ctx.save();
  ctx.translate(
    (Math.random() - .5) * shake,
    (Math.random() - .5) * shake
  );

  drawBackground();
  drawGround();

  if (running) {
    score += 0.08;
    scoreEl.innerText = Math.floor(score);

    gameSpeed += 0.0007;

    player.velY += gravity;
    player.y += player.velY;

    if (player.y >= groundY() - player.size) {
      player.y = groundY() - player.size;
      player.velY = 0;
      player.grounded = true;
      player.rotation = 0;
    } else {
      player.rotation += 0.12;
    }

    obstacles.forEach((o, i) => {
      o.x -= gameSpeed;

      if (collision(player, o)) {
        gameOver();
      }

      if (o.x + o.w < 0) {
        obstacles.splice(i, 1);
      }
    });
  }

  drawPlayer();
  drawObstacles();
  updateParticles();

  ctx.restore();
}

update();