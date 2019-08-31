pipeline {
    agent {
      docker {
          image 'node:8.11.1'
      }
    }
    stages {
        stage('Prepare') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test uint') {
            steps {
                sh 'npm run unit'
            }
        }
        stage('Test e2e') {
            steps {
                retry(2) {
                    sh 'npm run e2e'
                }
            }
        }
        stage('Test service') {
            steps {
                sh 'npm run service'
            }
        }
    }
}
