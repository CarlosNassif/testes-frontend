# Sistema frontend para gestão de usuários

## Descrição

Como parte do trabalho final da disciplina, deve-se criar uma interface administrativa para fazer a gestão dos usuários do nosso sistema.

### Requisitos

1. Sistema deve ser escrito utilizando [React Admin](https://marmelab.com/react-admin/Tutorial.html)
2. Deve conter testes de sistema utilizando [Cypress](https://www.cypress.io/):
    1. Listagem de usuários
        1. Validar que a mensagem "No User yet." é exibido quando não existir nenhum usuário no banco de dados
        2. Validar se um usuário está sendo listado
    2. Criar um novo usuário
        1. Validar a criação de um novo usuário no banco de dados (este cenário deve considerar o preenchimento do formulário de cadastro e depois clicar no botão "Save")
        2. Validar a criação de um novo usuário no banco de dados (este cenário deve considerar o preenchimento do formulário de cadastro e depois apertar "Enter" para enviar os dados)
    3. Editar um usuário
        1. Validar a edição de um usuário existente no banco de dados
        2. Cancelar a edição de um usuário depois de preencher o formulário e clicar no botão "Save"
    4. Remover um usuário
        1. Validar a remoção de um usuário no banco de dados
        2. Cancelar a remoção de um usuário depois de clicar no botão "Delete"
