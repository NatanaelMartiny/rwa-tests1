describe('loginFail - Cenários de Falha', () => {

  const usuarioInvalido = {
    username: 'usuario1',
    password: 'testesenha1'
  }

  it('Não deve permitir login com usuário inválido', () => {

    cy.visit('/')


    cy.get('[name="username"]').type(usuarioInvalido.username)
    cy.get('[name="password"]').type(usuarioInvalido.password)

    cy.get('[data-test="signin-submit"]').click()


    cy.get('[data-test="signin-error"]')
      .should('be.visible')
      .and('contain', 'Username or password is invalid')

  })

})