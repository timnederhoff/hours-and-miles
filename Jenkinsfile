node('dockerhost') {

  def dockerImage;

  docker.image('node').inside() {

    stage('checkout') {
      checkout scm
    }

    stage('install') {
      sh 'npm install'
    }

    stage('build') {
      sh 'npm build'
    }
  }

  stage('containerize') {
    dockerImage = docker.build("hours-and-miles:$BUILD_NAME")
  }

  stage('deploy') {
    def arguments = [
      '-v ./dist/hours-and-miles:/usr/share.nginx/html',
      '-e VIRTUAL_HOST=hours-and-miles.dev.timnederhoff.nl',
      '-e LETSENCRYPT_HOST=hours-and-miles.dev.timnederhoff.nl',
      '--expose 80',
      '--rm'
    ].join(' ')
    dockerImage.run(arguments)
  }

}
