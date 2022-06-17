pipeline{
    agent any
    environment {
        PROJECT_NAME = "fix_my_city"
        DOCKER_USER     = credentials('DOCKER_USER')
        DOCKER_PASSWORD = credentials('DOCKER_PASSWORD')
        VERSION = "${env.BUILD_ID}"
    }
    stages {
        stage('Tetsing') {
            steps {
                echo '=====> Testing api...'
                echo '=====>    API Have no test yet...'
                echo '=====> Testing client...'
                sh 'cd ./client && npm install && npm test --watch=false'
            }
        }
        stage('Building Docker images'){
            steps {
                // Build docker image For API
                    echo '=====> Building Docker image from API...'
                    sh "cd ./api && docker build -t ${PROJECT_NAME}_api:${VERSION} ."
                // Build docker image For Client
                    echo '=====> Building Docker image from Client...'
                    sh "cd ./client && docker build -t ${PROJECT_NAME}_client:${VERSION} ."
            }
        }
        stage('Pushing to Docker Hub'){
            steps {
                // Deploy docker image For API to docker hub
                    echo '=====> Pushing docker image to registry....'
                    sh 'docker tag ${PROJECT_NAME}_api:${VERSION} ${DOCKER_USER}/${PROJECT_NAME}_api:${VERSION}'
                    sh 'docker login -u ${DOCKER_USER} -p ${DOCKER_PASSWORD} docker.io'
                    sh 'docker push ${DOCKER_USER}/${PROJECT_NAME}_api:${VERSION}'
                // Deploy docker image For Client to docker hub
                    echo '=====> Pushing docker image to registry....'
                    sh 'docker tag ${PROJECT_NAME}_client:${VERSION} ${DOCKER_USER}/${PROJECT_NAME}_client:${VERSION}'
                    sh 'docker login -u ${DOCKER_USER} -p ${DOCKER_PASSWORD} docker.io'
                    sh 'docker push ${DOCKER_USER}/${PROJECT_NAME}_client:${VERSION}'

            }
        }
        stage('Deploying to Production'){
            steps {
                // Running docker compose for API & Client Containers
                echo '=====> Running docker compose for API & Client Containers...'
                sh "cd . && docker-compose up -d"
            }
        }
    }
}