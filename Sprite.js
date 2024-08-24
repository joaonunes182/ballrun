function Sprite(x, y, largura, altura){
    this.x = x; 
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.desenha = function(xCanvas, yCanvas){
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
    }
}

var bg = new Sprite(14, 11, 600, 600),
spriteBoneco = new Sprite(696, 37, 87, 87),
perdeu = new Sprite(656, 434, 471, 283),
jogar = new Sprite(639, 162, 331, 180),
novo = new Sprite(23, 738, 117, 19),
spriteRecord = new Sprite(25, 704, 182, 19),
spriteChao = new Sprite(13, 617, 600, 50);

const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile('index.html');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
