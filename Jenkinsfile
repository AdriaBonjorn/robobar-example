pipeline {
    agent any
    stages {
        stage('Clean') {
            steps {
                sh './npm run clean'
            }
        }
        stage('Test') {
            // parallelize browser tests
            parallel {
                stage('test: chrome') {
                    steps {
                        sh './npm run test'
                    }
                }
                stage('test: firefox') {
                    steps {
                        sh './npm run testFirefox'
                    }
                }
            }
            post {
                always {
                    junit 'build/test-results/test/*.xml'
                }
            }
        }
    }
}