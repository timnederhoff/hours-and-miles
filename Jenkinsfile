node('dockerhost') {

  def dockerImage;

  stage('checkout') {
    checkout scm
  }

  stage('install') {
    docker.image('node:10.16.3').run('npm install')
  }

  stage('build') {
    docker.image('node:10.16.3').run('npm build')
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
