pipeline{
    agent any
    environment {
        APP_NAME = "fix_my_city"
        DOCKER_USER     = credentials('DOCKER_USER')
        DOCKER_PASSWORD = credentials('DOCKER_PASSWORD')
        VERSION = "${env.BUILD_ID}"
    }
    stages {
        stage('Testing'){
            steps {
                echo '=====> Testing api...'
                echo '=====> Testing client...'
            }
        }
        stage('Build Docker images'){
            steps {
                echo '=====> building Docker image from api...'
                sh "cd ./api && docker build -t ${APP_NAME}_api:${VERSION} ."
                echo '=====> building Docker image from client...'
                sh "cd ./client && docker build -t ${APP_NAME}_client:${VERSION} ."
            }
        }
        stage('Deploy'){
            steps {
                echo '=====> Pushing docker image to registry....'
                sh 'docker tag ${APP_NAME}_api:${VERSION} ${DOCKER_USER}/${APP_NAME}_api:${VERSION}'
                sh 'docker login -u ${DOCKER_USER} -p ${DOCKER_PASSWORD} docker.io'
                sh 'docker push ${DOCKER_USER}/${APP_NAME}_api:${VERSION}'
                echo '=====> Pushing docker image to registry....'
                sh 'docker tag ${APP_NAME}_client:${VERSION} ${DOCKER_USER}/${APP_NAME}_client:${VERSION}'
                sh 'docker login -u ${DOCKER_USER} -p ${DOCKER_PASSWORD} docker.io'
                sh 'docker push ${DOCKER_USER}/${APP_NAME}_client:${VERSION}'
            }
        }
    }
}