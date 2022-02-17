pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Clean') {
            steps {
                sh 'npm clean'
            }
        }
        stage('Build') {
                    steps {
                        sh 'npm run build'
                    }
                }
        stage('Test') {
            sh './npm run test'

            }
            post {
                always {
                    junit 'results/*.xml'
                }
            }
        }
    }
}