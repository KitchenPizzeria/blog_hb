pipeline {
  
  agent any
  
  options {
    timestamps()
    disableConcurrentBuilds()
  }  

  stages {

    stage("Build"){
      steps{
        echo "********** ${STAGE_NAME} **********"
        sh "npm i"
      }
    }
    
    stage("Package Artifact"){
      steps {
        echo "********** ${STAGE_NAME} **********"
        sh """
          mkdir -p build
          mv database build/database
          mv src build/src
          mv views build/views
          mv getBlogInfo.sh build/getBlogInfo.sh
          tar -zcvf build.tgz build
        """
      }
    }
    
    stage("Archive Artifact"){
      steps{
        echo "********** ${STAGE_NAME} **********"
        archiveArtifacts artifacts: 'build.tgz', onlyIfSuccessful: true
      }
    }
      
  //   stage("Deploy"){
  //     steps {
  //       echo "The name of this stage: ${STAGE_NAME}"
  //       sshPublisher(
  //         publishers: [
  //           sshPublisherDesc(
  //             configName: 'AWS deployment server', 
  //             transfers: [
  //               sshTransfer(
  //                 cleanRemote: false,
  //                 excludes: '', 
  //                 execCommand: '''tar -zxvf build.tgz 
  //                               mv build/index.html /var/www/html/index.html''', 
  //                 execTimeout: 120000, 
  //                 flatten: false, 
  //                 makeEmptyDirs: false, 
  //                 noDefaultExcludes: false, 
  //                 patternSeparator: '[, ]+', 
  //                 remoteDirectory: '', 
  //                 remoteDirectorySDF: false, 
  //                 removePrefix: '', 
  //                 sourceFiles: 'build.tgz'
  //               )
  //             ], usePromotionTimestamp: false, useWorkspaceInPromotion: false,  verbose: false)])
  //     }
  //   }
    
  }
  
  post {
    cleanup {
      cleanWs()
    } 
  }
}
