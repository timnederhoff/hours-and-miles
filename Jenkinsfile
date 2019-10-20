node('dockerhost') {

  def dockerImage;

  stage('checkout') {
    checkout scm
  }

  docker.image('node:10.16.3').inside {
    withEnv(['npm_config_cache=npm-cache', 'HOME=.']) {
      stage('install') {
        sh 'npm install'
      }

      stage('build') {
        sh 'npm run build'
      }
    }
  }

  stage('containerize') {
    dockerImage = docker.build("hours-and-miles:$BUILD_NUMBER")
  }

  stage('deploy') {
    def arguments = [
      '-v $PWD/dist/hours-and-miles:/usr/share/nginx/html',
      '-e VIRTUAL_HOST=hours-and-miles.dev.timnederhoff.nl',
      '-e LETSENCRYPT_HOST=hours-and-miles.dev.timnederhoff.nl',
      '--expose 80',
      '--rm'
    ].join(' ')
    dockerImage.run(arguments)
  }

}
