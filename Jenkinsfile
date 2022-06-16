pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                cd ./api && ls && \
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}