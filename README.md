📄 README.md para o seu projeto
# 👤 Lista de Usuários — React + Vite + JSON Server

Um projeto simples e funcional para cadastro e listagem de usuários utilizando **React**, **Vite**, **TailwindCSS** e uma API local com **JSON Server**.  
A aplicação permite visualizar usuários cadastrados e adicionar novos em tempo real.

---

## 🧰 Tecnologias utilizadas

- React
- Vite
- TailwindCSS
- JSON Server
- Fetch API
- Hook personalizado (`useFetch`)

---

## 🚀 Como rodar o projeto

### 🔧 1. Instalar dependências

```bash
npm install

📡 2. Iniciar o JSON Server

Certifique-se de ter um arquivo db.json configurado assim:

{
  "users": []
}


Depois execute:

npx json-server --watch db.json --port 3001


A API ficará disponível em:

http://localhost:3001/users

💻 3. Rodar o servidor de desenvolvimento
npm run dev


A aplicação abrirá em:

http://localhost:5173

🧩 Estrutura da aplicação
🔹 Hook useFetch

Responsável por buscar dados da API, armazenar a lista de pessoas, exibir mensagens de loading e atualizar o estado.

🔹 Componente Busca

Responsável por:

Exibir lista de usuários

Exibir estado de carregamento

Enviar novos cadastros para a API

Atualizar a lista dinamicamente

✨ Funcionalidades

✔️ Buscar usuários automaticamente ao carregar a página

✔️ Exibir lista com nome e profissão

✔️ Enviar novos usuários para a API

✔️ Atualizar lista sem recarregar a página

✔️ Layout simples utilizando TailwindCSS

📷 Layout (opcional)

Se quiser, você pode adicionar imagens do projeto aqui:

![Preview do Projeto](./src/assets/preview.png)

📦 Deploy no GitHub Pages

Se estiver usando Vite, lembre-se de ajustar o arquivo vite.config.js:

export default defineConfig({
  base: "/NOME_DO_REPO/",
  plugins: [react()],
});


E para publicar:

npm run build
npm run deploy

📝 Licença

Este projeto está sob licença MIT.
Sinta-se livre para estudar, modificar e utilizar como quiser.


---
