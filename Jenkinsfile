pipeline {
    agent any
    

    environment {
        BRANCH = "${env.BRANCH_NAME}"
        IMAGE = "ts4udocker/biyekorun-frontend"
        VERSION = "${env.BUILD_NUMBER}"
    }
    stages {
        stage('Build image') {
            steps{
                script{
                    if(BRANCH == 'main'){
                         dockerImage = docker.build("${IMAGE}","-f Dockerfile.staging .")
                     }else if(BRANCH == 'production'){
                         dockerImage = docker.build("${IMAGE}","-f Dockerfile.production .")
                     }
                }

            }
        }
        stage('Push image') {
            steps{
                script{
                     if(BRANCH == 'main' || BRANCH == 'production'){
                            docker.withRegistry('', 'ts4udocker') {
                            dockerImage.push("${BRANCH}-${VERSION}")
                            dockerImage.push("${BRANCH}-latest")
                        }
                     }
                    
                }

            }
        }


        stage('Deploy image') {

            
            steps{
                script{
                    
                     if(BRANCH == 'main'){

                         withCredentials([string(credentialsId: 'doctl_token', variable: 'DO_API_KEY')]) {
                           
                                sh '''
                                doctl auth init --access-token $DO_API_KEY && \
                                doctl kubernetes cluster kubeconfig save ts4u-staging --set-current-context && \
                                helm upgrade --install biyekorun-frontend ./helm/biyekorun-frontend -f ./helm/biyekorun-frontend/values.staging.yaml --set image.tag=${BRANCH}-${VERSION}
                                '''
                            }

                    }


                     if(BRANCH == 'production'){

                         withCredentials([string(credentialsId: 'doctl_token', variable: 'DO_API_KEY')]) {
                           
                                sh '''
                                doctl auth init --access-token $DO_API_KEY && \
                                doctl kubernetes cluster kubeconfig save ts4u-k8s --set-current-context && \
                                helm upgrade --install biyekorun-frontend-prod ./helm/biyekorun-frontend -f ./helm/biyekorun-frontend/values.prod.yaml --set image.tag=${BRANCH}-${VERSION}
                                '''
                            }

                    }



                }
                    
            }

        }
        


        stage('Clean image') {
            steps{
                script{
                    sh "docker rmi ${IMAGE}:${BRANCH}-${VERSION}"
                    sh "docker rmi ${IMAGE}:${BRANCH}-latest"
                }

            }
        }
        
        
        
    }
}