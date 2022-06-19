# Spotify Playlists Search App

<img width="300" src="https://cdn.discordapp.com/attachments/693151307116314736/988037732871856168/Screenshot_20220619-080743_Expo_Go.jpg" />

- [Spotify Playlists Search App](#spotify-playlists-search-app)
  - [[pt-BR]](#pt-br)
  - [Funcionalidades](#funcionalidades)
    - [Tema escuro](#tema-escuro)
    - [Filtros de Pesquisa de Playlists](#filtros-de-pesquisa-de-playlists)
    - [Pesquisa de Playlists](#pesquisa-de-playlists)
  - [Instruções para instalação](#instruções-para-instalação)
    - [Ambiente de Desenvolvimento](#ambiente-de-desenvolvimento)
    - [Instalando as dependências do projeto](#instalando-as-dependências-do-projeto)
    - [Como executar o projeto](#como-executar-o-projeto)
  - [Sobre as decisões tomadas](#sobre-as-decisões-tomadas)
  - [[en-US]](#en-us)
  - [Features](#features)
    - [Dark Theme](#dark-theme)
    - [Playlists Filters](#playlists-filters)
    - [Playlists Search](#playlists-search)
  - [Installation instructions](#installation-instructions)
    - [Development env](#development-env)
    - [Installing the dependencies](#installing-the-dependencies)
    - [How to start the project](#how-to-start-the-project)
  - [About the decisions taken](#about-the-decisions-taken)


## [pt-BR]

Um App React Native para listar e pesquisar playlists na [Web API do Spotify](https://developer.spotify.com/documentation/web-api/reference/#/operations/search)

____

## Funcionalidades

### Tema escuro

O componente `<ThemeToggler />` é exibido na tela de Login e tem a responsabilidade de alternar entre o tema escuro e claro.

**Nota**: Por padrão o app abrirá com o tema escuro

<img width="300" src="https://cdn.discordapp.com/attachments/693151307116314736/988038749902499880/vlc_K1klj2CUTk.gif" />


### Filtros de Pesquisa de Playlists

Pesquisa por gêneros

<img width="300" src="https://cdn.discordapp.com/attachments/693151307116314736/988040948372094996/vlc_SnzPh7BWUy.gif" />

### Pesquisa de Playlists

Pesquise as playlists criadas de seu artista favorito.

<img width="300" src="https://cdn.discordapp.com/attachments/693151307116314736/988041488225165322/vlc_iIXyrKoq44.gif" />

____

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


____

## Features

### Dark Theme

The component `<ThemeToggler />` shown on Login screen is responsable for toggling between the dark and light themes.

**Note**: The app will open with dark theme by default.

<img width="300" src="https://cdn.discordapp.com/attachments/693151307116314736/988038749902499880/vlc_K1klj2CUTk.gif" />


### Playlists Filters

Search by genre.

<img width="300" src="https://cdn.discordapp.com/attachments/693151307116314736/988040948372094996/vlc_SnzPh7BWUy.gif" />

### Playlists Search

Search created playlists from your favorite artists.

<img width="300" src="https://cdn.discordapp.com/attachments/693151307116314736/988041488225165322/vlc_iIXyrKoq44.gif" />

____


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

### How to start the project

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
