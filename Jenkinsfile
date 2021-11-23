pipeline {
      agent any
      environment {
            AWS_ACCESS_KEY_ID="AKIAYZFWRJC45XCYPKPL"
            AWS_SECRET_KEY="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"
            IMAGE_REPO="je-ifw"
            ECR_REPO_URI="603825719481.dkr.ecr.eu-west-1.amazonaws.com/${IMAGE_REPO}"
      }

      stages {

            stage("Logging into AWS ECR") {
                  steps{
                        script{
                              echo "---------- ${STAGE_NAME} ----------"
                              sh "aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin 603825719481.dkr.ecr.eu-west-1.amazonaws.com"
                        }
                  }
            }

            stage('Building Docker Image') { 
                  steps {
                        script{
                              echo "---------- ${STAGE_NAME} ----------"
                              sh "docker build -t ${IMAGE_REPO} ."
                        }
                  }
            }        

            stage('Deploy Image to ECR') {
                  steps{
                        script{
                              sh '''
                                    docker tag je-ifw:latest 603825719481.dkr.ecr.eu-west-1.amazonaws.com/je-ifw:latest
                                    docker push 603825719481.dkr.ecr.eu-west-1.amazonaws.com/je-ifw:latest
                              '''
                        }
                  }
            }

      }
}