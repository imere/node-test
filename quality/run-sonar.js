const exec = require('child_process').execSync;

if ('win32' === process.platform) {
  console.log(exec('cd quality && sonar-scanner.bat'));
} else {
  console.log(exec('cd quality && sonar-scanner.sh'));
}
