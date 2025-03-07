# DRPC

DRPC é uma aplicação Electron que permite criar e gerenciar Rich Presence para o Discord. A aplicação permite que você cadastre, visualize, inicie e pare Rich Presence diretamente da interface.

## Funcionalidades

- **Cadastro de Rich Presence**: Adicione informações como Client ID, detalhes, estado, e chaves de imagem para criar um novo Rich Presence.
- **Visualização de Rich Presence**: Veja a lista de todos os Rich Presence cadastrados.
- **Iniciar/Parar Rich Presence**: Selecione um Rich Presence da lista e inicie ou pare a presença no Discord.
- **Deletar Rich Presence**: Remova um Rich Presence cadastrado da lista.

## Como usar

1. **Instalação**:
   - Clone o repositório.
   - Execute `npm install` para instalar as dependências.

2. **Iniciar a aplicação**:
   - Execute `npm start` para iniciar a aplicação Electron.

3. **Cadastro de Rich Presence**:
   - Preencha os campos do formulário com as informações necessárias.
   - Clique em "Create rich presence" para salvar o Rich Presence.

4. **Gerenciar Rich Presence**:
   - A lista de Rich Presence cadastrados será exibida na interface.
   - Clique em um item da lista para selecioná-lo.
   - Use os botões "Start" e "Stop" para iniciar ou parar o Rich Presence.
   - Clique no ícone de lixeira para deletar um Rich Presence.

## Estrutura do Projeto

- **src/pages/Home/FormHome/index.tsx**: Componente principal que contém o formulário e a lista de Rich Presence.
- **package.json**: Arquivo de configuração do projeto, incluindo dependências e scripts.

## Dependências

- Electron
- React
- React Hook Form
- Zod
- Styled Components
- React Icons

## Autor

- **caduzz**: [67341983+caduzz@users.noreply.github.com](mailto:67341983+caduzz@users.noreply.github.com)

## Licença

Este projeto está licenciado sob a licença MIT.
