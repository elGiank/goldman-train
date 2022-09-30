pipeline {
    agent any

    environment {
        currentDateTime = sh(returnStdout: true, script: 'date +%d%m%Y%H%M%S').trim()
    }

    tools {nodejs "node16132"}

    stages {
        stage("Limpiar directorio"){
            steps {
                deleteDir()
            }
        }
        stage("Clonar Repositorio"){
            steps {
                git 'https://github.com/elGiank/goldman-train.git'
            }
        }
        stage("Instalar dependencias"){
            steps {
                sh "npm install"
            }
        }
        stage("Pruebas de microservicios pos-despliegue") {
            steps {
                sh "npm run test:api-dev"
                sh "curl -u<email>:<token> -T ./newman/report.html \"<artifactory-url>/<repository>/${currentDateTime}.html\""
            }
        }
    }
}
