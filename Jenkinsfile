pipeline {
    agent any
    stages {
        stage('Clean') {
            steps {
                sh './npm run clean'
            }
        }
        stage('Test') {
            sh './npm run test'

            }
            post {
                always {
                    junit 'build/test-results/test/*.xml'
                }
            }
        }
    }
}