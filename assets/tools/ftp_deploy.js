const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const config = {
  user: "unaux_25749549",
  password: "jzpl67qp7r7",
  host: "ftp.unaux.com",
  port: 21,
  localRoot: __dirname + "/../build/",
  remoteRoot: "/htdocs/",
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