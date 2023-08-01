/* eslint-disable no-undef */
describe("Users CRUD", () => {
  describe("Listagem de usuários ", () => {
    beforeEach(() => {
      cy.task("db:erase");
      cy.visit("http://localhost:5173");
    });

    // Mudei para "No User yet." visto que essa parte é feita pelo componente Resource
    it("Validar que a mensagem 'No User yet.' é exibido quando não existir nenhum usuário no banco de dados", () => {
      cy.contains("No User yet.");
    });

    it("Validar se um usuário está sendo listado", () => {
      cy.task("db:create", {
        name: "Teste Teste",
        email: "teste@teste.com",
        password: "teste",
      });
      cy.visit("http://localhost:5173");
      cy.contains("Teste Teste");
    });
  });

  describe("Criar um novo usuário", () => {
    beforeEach(() => {
      cy.task("db:erase");
      cy.visit("http://localhost:5173");
      cy.get(".RaCreateButton-root").click();
    });

    it("Validar a criação de um novo usuário no banco de dados (este cenário deve considerar o preenchimento do formulário de cadastro e depois clicar no botão 'Save')", () => {
      cy.get("#name").type("Teste 2 Teste");
      cy.get("#email").type("teste2@teste.com");
      cy.get("#password").type("teste2");
      cy.get(".RaToolbar-defaultToolbar > .MuiButtonBase-root").click();
    });

    it("Validar a criação de um novo usuário no banco de dados (este cenário deve considerar o preenchimento do formulário de cadastro e depois apertar 'Enter' para enviar os dados)", () => {
      cy.get("#name").type("Teste 2 Teste");
      cy.get("#email").type("teste2@teste.com");
      cy.get("#password").type("teste2{enter}");
    });

    afterEach(() => {
      cy.contains("Element created");
      cy.visit("http://localhost:5173");
      cy.contains("Teste 2 Teste");
    });
  });

  describe("Editar um usuário", () => {
    beforeEach(() => {
      cy.task("db:erase");
      cy.task("db:create", {
        name: "Teste Teste",
        email: "teste@teste.com",
        password: "teste",
      });
      cy.visit("http://localhost:5173");
    });

    it("Validar a edição de um usuário existente no banco de dados", () => {
      cy.get(".MuiTableBody-root > :nth-child(1)").click();
      cy.get("#name").clear().type("Teste 2 Teste Edited");
      cy.get("#email").clear().type("teste2edited@teste.com");
      cy.get("#password").clear().type("password2 Edited");
      cy.get(".RaToolbar-defaultToolbar > .MuiButton-contained").click();
      cy.contains("Element updated");
      cy.contains("Teste 2 Teste Edited");
    });

    it("Cancelar a edição de um usuário depois de preencher o formulário e clicar no botão 'Save'", () => {
      cy.get(".MuiTableBody-root > :nth-child(1)").click();
      cy.get("#name").clear().type("Teste 2 Teste Edited");
      cy.get("#email").clear().type("teste2edited@teste.com");
      cy.get("#password").clear().type("password2 Edited");
      cy.get(".RaToolbar-defaultToolbar > .MuiButton-contained").click();
      cy.contains("Element updated");
      cy.contains("Teste 2 Teste Edited");
      cy.get(".MuiSnackbarContent-action").contains("Undo").click();
      cy.contains("Teste 2 Teste Edited").should("not.exist");
      cy.contains("Teste Teste");
    });
  });

  describe("Remover um usuário", () => {
    beforeEach(() => {
      cy.task("db:erase");
      cy.task("db:create", {
        name: "Teste Teste",
        email: "teste@teste.com",
        password: "teste",
      });
      cy.visit("http://localhost:5173");
    });

    it("Validar a remoção de um usuário no banco de dados", () => {
      cy.get(".MuiTableBody-root > :nth-child(1)").click();
      cy.get(".ra-delete-button").click();
      cy.contains("Teste Teste").should("not.exist");
      cy.contains("Element deleted");
    });

    it("Cancelar a remoção de um usuário depois de clicar no botão 'Delete'", () => {
      cy.get(".MuiTableBody-root > :nth-child(1)").click();
      cy.get(".ra-delete-button").click();
      cy.contains("Teste Teste").should("not.exist");
      cy.contains("Element deleted");
      cy.get(".MuiSnackbarContent-action").contains("Undo").click();
      cy.contains("Teste Teste").should("exist");
    });
  });
});
