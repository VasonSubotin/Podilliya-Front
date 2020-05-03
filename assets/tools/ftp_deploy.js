const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const config = {
  user: "prtesd@prtesd.ml",
  password: "tesdtesd1",
  host: "ftp.strekoza-design.kiev.ua",
  port: 21,
  localRoot: __dirname + "/../build/",
  remoteRoot: "/",
  include: ["*", "**/*"],
  exclude: ["**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
  deleteRemote: true,
  forcePasv: true
};

ftpDeploy
  .deploy(config)
  .then(res => console.log(
    `
    --------------------------------------------------
    REMOVE FTP CONNETCION DATA!!!
    --------------------------------------------------
    
    finished:
    `, res,`
    --------------------------------------------------
    REMOVE FTP CONNETCION DATA!!!
    --------------------------------------------------
    `))
  .catch(err => console.log(err));