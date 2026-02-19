describe('Teste de Login', () => {

  const usuarioVálido = {
    username: 'natanaelmartiny',
    password: 's3cret'
  }

  it('Login com sucesso', () => {

    cy.visit('/')


    cy.get('[name="username"]').type(usuarioVálido.username)
    cy.get('[name="password"]').type(usuarioVálido.password)

    cy.get('[data-test="signin-submit"]').click()

    cy.get("[role='tablist']").should('be.visible')
    cy.contains("Home").should('be.visible')
  })
})
