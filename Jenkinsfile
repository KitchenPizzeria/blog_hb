node {    
      def app     

      stage('Clone repository') {        
            echo "Checking out BLOG @ ${BRANCH_NAME}"       
            checkout scm    
      }     

      stage('Build image') {         
            echo "Building Docker Image from Dockerfile in BLOG @ ${BRANCH_NAME}"
            app = docker.build("je-ifw")    
      }     

      stage('Deploy Image to ECR') {
            steps{
                  docker.withRegistry('603825719481.dkr.ecr.eu-west-1.amazonaws.com/je-ifw', 
                  'ecr:eu-west-1:aws_credentials') {                      
                        app.push("test-jenkins")        
                  } 
            }
      }
}