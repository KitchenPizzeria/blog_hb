pipeline {
      def app
      agent any
      environment {
            AWS_ACCESS_KEY_ID="AKIAYZFWRJC45XCYPKPL"
            AWS_SECRET_KEY="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"
            IMAGE_REPO="je-ifw"
            ECR_REPO_URI="603825719481.dkr.ecr.eu-west-1.amazonaws.com/${IMAGE_REPO}"
      }

      stage("Logging into AWS ECR") {
            echo "---------- ${STAGE_NAME} ----------"
            sh ""
      }

      stage('Building Docker Image') { 
            steps {
                  script{
                        sh 'echo "---------- ${STAGE_NAME} ----------"'
                        dockerImage = docker.build(${IMAGE_REPO})
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