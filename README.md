# Pass.in Mobile

O Pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema irá escanear a credencial do participante para permitir a entrada no evento.

## Descrição

Este repositório consiste na construção do front-end da aplicação mobile.

### Tecnologias

- [NodeJs 2.12+](https://nodejs.org/dist/v20.12.1/node-v20.12.1-x64.msi)
- [TypeScript 5.1+](https://www.typescriptlang.org/download)
- [NativeWind 4.0+](https://www.nativewind.dev/)
- [Expo 50.0+](https://docs.expo.dev/get-started/installation/)
- [Expo Router 3.4+](https://www.nativewind.dev/v4/getting-started/expo-router)
- [Zustand 4.5+](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Moti 0.28+](https://moti.fyi/)

### Navegação

- \> Pass\.in Mobile
- [Pass.in API](https://github.com/JoaoErick/pj-pass-in-backend)

## Requisitos

### Requisitos funcionais

- [x] O organizador deve poder cadastrar um novo evento;
- [x] O organizador deve poder visualizar dados de um evento;
- [x] O organizador deve poser visualizar a lista de participantes;
- [x] O participante deve poder se inscrever em um evento;
- [x] O participante deve poder visualizar seu crachá de inscrição;
- [x] O participante deve poder realizar check-in no evento;

### Regras de negócio

- [x] O participante só pode se inscrever em um evento uma única vez;
- [x] O participante só pode se inscrever em eventos com vagas disponíveis;
- [x] O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais

- [x] O check-in no evento será realizado através de um QRCode;

## Telas

O aplicativo possui quatro telas:

- Splash;
- Código do ingresso;
- Inscrição no evento;
- Acesso à credencial.

<p align="center">
  <img src="https://i.imgur.com/BlcWk6j.png" alt="Lexical Analyzer Icon" width="220px">
  <img src="https://i.imgur.com/8pPr6Kx.png" alt="Lexical Analyzer Icon" width="220px">
  <img src="https://i.imgur.com/eCaJnko.png" alt="Lexical Analyzer Icon" width="220px">
  <img src="https://i.imgur.com/GCFK1Kn.png" alt="Lexical Analyzer Icon" width="220px">
</p>

## Getting Started

1. Clone este repositório;
2. Garanta que existe a versão 2.12+ do NodeJs instalada na sua máquina;
3. Instale as dependências do projeto:
   ```cmd
   npm install
   ```
4. Execute o projeto:
   `cmd
    npx expo start
    `
   > Por padrão, a aplicação será executada no endereço http://localhost:8081
