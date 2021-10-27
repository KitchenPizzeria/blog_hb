pipeline {
  
  agent any
  
  options {
    timestamps()
    disableConcurrentBuilds()
  }  
  
  environment {
     FILENAME = "index.html"
     GITHUB = credentials("GitHub")
  }
  
//   parameters {
//      string(name: 'name', defaultValue: 'Joseph')
//      text(name: 'BIOGRAPHY', defaultValue: '', description: 'Enter some information about the person')
//      booleanParam(name: 'TOGGLE', defaultValue: true, description: 'Toggle this value')
//      choice(name: 'CHOICE', choices: ['One', 'Two', 'Three'], description: 'Pick something')
//      password(name: 'PASSWORD', defaultValue: 'SECRET', description: 'Enter a password')
//   }

  stages {
    stage("Build"){
      steps {  
        echo "The name of this stage: ${STAGE_NAME}"
        //echo "The credentials Username: ${GITHUB_USER}"
        //greeting(params.name)
      }
    }
    
    
//     stage("Test") {
//       steps {            
//           sh """         
//             chmod +x contains.sh 
//             ./contains.sh "jenkins"
//           """
//       } 
//     }
    
    stage("Package Artifact"){
      steps {
        sh """
          mkdir -p build
          mv ${FILENAME} build
          tar -zcvf build.tgz build
        """
      }
    }
    
    stage("Archive Artifact"){
      steps{
        archiveArtifacts artifacts: 'build.tgz', onlyIfSuccessful: true
      }
    }
      
    stage("Deploy"){
      steps {
        echo "The name of this stage: ${STAGE_NAME}"
        sshPublisher(
          publishers: [
            sshPublisherDesc(
              configName: 'AWS deployment server', 
              transfers: [
                sshTransfer(
                  cleanRemote: false,
                  excludes: '', 
                  execCommand: '''tar -zxvf build.tgz 
                                mv build/index.html /var/www/html/index.html''', 
                  execTimeout: 120000, 
                  flatten: false, 
                  makeEmptyDirs: false, 
                  noDefaultExcludes: false, 
                  patternSeparator: '[, ]+', 
                  remoteDirectory: '', 
                  remoteDirectorySDF: false, 
                  removePrefix: '', 
                  sourceFiles: 'build.tgz'
                )
              ], usePromotionTimestamp: false, useWorkspaceInPromotion: false,  verbose: false)])
      }
    }
    
  }
  
  post {
    always {
      archiveArtifacts artifacts: "build/${FILENAME}"
    }
    cleanup {
      cleanWs()
    } 
  }
}
