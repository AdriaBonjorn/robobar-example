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