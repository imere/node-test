const exec = require('child_process').execSync;
// export SONAR_SCANNER_MIRROR=https://npm.taobao.org/mirrors/sonar-scanner/

if ('win32' === process.platform) {
  console.log(exec('cd quality && sonar-scanner.bat', { encoding: 'utf-8' }));
} else {
  console.log(exec('cd quality && sonar-scanner.sh', { encoding: 'utf-8' }));
}
