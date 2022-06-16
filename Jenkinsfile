pipeline {
    agent any

    stages {
        stage('Building Api') {
            steps {
                echo 'Building API..'
                sh "cd ./api && mvn clean && mvn package"
                sh "cd ../"
            }
        }
        stage('Building client') {
            steps {
                echo "Building Client..."
                sh "cd ./client && npm install && npm build"
                sh "cd ../"
            }
        }
        stage('Deploy Docker') {
            steps {
                echo 'Deploying docker compose....'
                sh "dcoker-compose up -d"
            }
        }
    }
}