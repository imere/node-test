pipeline {
    agent {
      docker {
          image 'node:8.11.1'
      }
    }
    stages {
        stage('Prepare') {
            steps {
                bat 'npm config set registry https://registry.npm.taobao.org && npm install'
            }
        }
        stage('Test uint') {
            steps {
                bat 'npm run sonar'
            }
        }
        stage('Test e2e') {
            steps {
                retry(2) {
                    bat 'npm run e2e'
                }
            }
        }
        stage('Test service') {
            steps {
                bat 'npm run service'
            }
        }
    }
}
