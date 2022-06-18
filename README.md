# Spotify Playlists Search App

## [pt-BR]

Um App React Native para listar e pesquisar playlists na [Web API do Spotify](https://developer.spotify.com/documentation/web-api/reference/#/operations/search)

## Instruções para instalação

### Ambiente de Desenvolvimento

Por gentileza, siga as intruções descritas na [documentação oficial do Expo](https://docs.expo.dev/get-started/installation) para preparar seu ambiente de desenvolvimento.

### Instalando as dependências do projeto

**Atenção**: O projeto foi configurado utilizando o Yarn (v1.22.18) e as versões dependências estão fixas no arquivo `yarn.lock`.

____

Para instalar as dependências utilize o comando:

```
yarn
```

### Como executar o projeto

**Android**

Após abrir o emulador do `AVD` ou `Genymotion`, ou conectar seu dispositivo Android via USB (com modo de depuração ativado), execute o seguinte comando no terminal:

```
yarn android
```

**iOS**

Execute o seguinte comando no terminal:

```
yarn ios
```

____

## Sobre as decisões tomadas

**Porque usar Redux em um projeto tão pequeno?**

Por se tratar de um projeto de avaliação, decidi implementar Redux e Redux Sagas para demonstrar a abordagem que eu escolheria caso estivésse criando uma aplicação do mundo real. 

Sinto que devo citar que em projetos menores, a própria Context API supriria basicamente todas as necessidades de compartilhamento de estado, inclusive nesse projeto.

**Por que utilizar o Native Base ao invés de criar os componentes com styled-components ou StyleSheet.create?**

Como o principal desafio do projeto era estudar e implementar a [Web API do Spotify](https://developer.spotify.com/documentation/web-api/reference/#/operations/search), decidi implementar o Native Base para agilizar o desenvolvimento das telas.

____

## [en-US]

A React Native App that allows you to list and search Spotify Playlists using [Spotify's Web API](https://developer.spotify.com/documentation/web-api/reference/#/operations/search)

## Installation instructions

### Development env

Please follow the instructions on the [Official Expo Documentation](https://docs.expo.dev/get-started/installation) for preparing your dev env.

### Installing the dependencies

**WARNING**: This project was configured using Yarn (v1.22.18) and the deps versions are locked on `yarn.lock` file.

____

Run the following command to install the dependencies:

```
yarn
```

### How to start the projeect

**Android**

After installing the `AVD` emulator or `Genymotion` or even connecting your Android device via USB (with debugging mode enabled), execute the following command on your terminal:

```
yarn android
```

**iOS**

Run the following command on your terminal:

```
yarn ios
```

____

## About the decisions taken

**Why to use Redux in such a small project?**

Since this is a test project, I have decided to implement Redux and Redux Sagas to demonstrate how I would aproach if this was a real world app. 

It's worth mentioning that Context API would be enough to cover all use cases in smallers projects (including this one).

**Why to use Native Base instead of styled-components or StyleSheet.create?**

Since the biggest challenge with this project was to understand and implement [Spotify's Web API](https://developer.spotify.com/documentation/web-api/reference/#/operations/search), I have decided to use Native Base for a faster development.
