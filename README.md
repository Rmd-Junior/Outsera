# Testes e Ferramentas Utilizadas

Este projeto inclui diferentes tipos de testes automatizados para garantir a qualidade do sistema. Abaixo estão as ferramentas e programas utilizados para a execução dos testes:

## Ferramentas de Testes

### 1. **Teste de Carga: K6**
- **K6** foi utilizado para realizar testes de carga e performance do sistema. Ele é uma ferramenta de código aberto, focada em testes de performance e carga de APIs, simulando diversos usuários simultâneos.
- **Linguagem**: JavaScript
- **Link**: [K6](https://k6.io/)

### 2. **Testes de API: Cypress**
- **Cypress** foi utilizado para realizar testes de APIs. Ele fornece uma maneira simples de interagir e testar APIs de forma rápida e confiável.
- **Linguagem**: JavaScript
- **Link**: [Cypress](https://www.cypress.io/)

### 3. **Testes E2E: Cucumber + Selenium (Java)**
- Para testes End-to-End (E2E), utilizamos **Cucumber** em conjunto com **Selenium**. Cucumber foi escolhido por sua capacidade de escrever testes em uma linguagem legível por humanos (Gherkin), enquanto o Selenium foi utilizado para automação de interações com o navegador.
- **Linguagem**: Java
- **Link Cucumber**: [Cucumber](https://cucumber.io/)
- **Link Selenium**: [Selenium](https://www.selenium.dev/)

### 4. **Testes Mobile: Appium**
- Para testes em dispositivos móveis, utilizamos **Appium**, uma ferramenta de código aberto que permite a automação de testes em dispositivos móveis iOS e Android.
- **Linguagem**: JavaScript
- **Link**: [Appium](https://appium.io/)

### 5. **CI/CD: GitHub Actions**
- O processo de integração contínua (CI) e entrega contínua (CD) foi configurado utilizando **GitHub Actions**, que automatiza a execução dos testes e a implantação do código.
- **Link**: [GitHub Actions](https://docs.github.com/en/actions)

## Ambiente de Execução

### 1. Instalar as Dependências

Certifique-se de ter os seguintes programas instalados no seu computador para rodar os testes localmente:

- **Node.js** (Para K6, Cypress e Appium):
    - [Instalar Node.js](https://nodejs.org/), que vem com o NPM (gerenciador de pacotes).
  
- **Java 11+** (Para os testes com Cucumber e Selenium):
    - [Instalar o Java](https://adoptopenjdk.net/).

- **Git** (Para clonar o repositório e interagir com o GitHub Actions):
    - [Instalar o Git](https://git-scm.com/).

- **Docker** (Opcional, se o ambiente de teste for configurado com Docker):
    - [Instalar Docker](https://www.docker.com/get-started).

### 2. Configuração e Execução dos Testes

#### Teste de Carga (K6)
Para rodar os testes de carga com K6, execute os seguintes passos:

1. Instale o K6:
   ```bash
   brew install k6  # Para usuários de macOS
   # Ou instale conforme a documentação oficial
2. Execute o teste de carga:
   ``Terminal
   k6 run <arquivo_de_teste.js>

### Testes de API (Cypress)
Para rodar os testes de API com Cypress:

1. Instale as dependências do Cypress:
   ``bash
   npm install cypress

2. Execute o Cypress:
   ``bash
   npx cypress open

### Testes E2E (Cucumber + Selenium)
Para rodar os testes End-to-End com Cucumber e Selenium:

1. Instale as dependências do projeto:
   ``bash
   mvn install  # Se estiver utilizando Maven
   # ou
   gradle build  # Se estiver utilizando Gradle

2. Execute os testes:
   ``bash
   mvn test  # Para Maven
   # ou
   gradle test  # Para Gradle

### Testes Mobile (Appium)
1. Para rodar os testes móveis com Appium:
   ``bash
   npm install -g appium

2. Execute o Appium:
   ``bash
   appium
   
3. Em seguida, execute os testes com:
   ``bash
   node <arquivo_de_teste.js>

### CI/CD (GitHub Actions)
Os testes serão automaticamente executados através do fluxo de CI/CD no GitHub Actions. Sempre que você fizer push ou pull request para o repositório, os testes serão executados automaticamente.

O fluxo de trabalho do GitHub Actions está configurado no arquivo .github/workflows/ci.yml. Você pode verificar a execução dos testes no painel de ações do GitHub.

