describe('Visualizar histórico de transações com sucesso', () => {

  const username = 'felipemartiny'
  const password = '123456'

  beforeEach(() => {
    cy.visit('/signin')
    cy.get('[data-test="signin-username"]').type(username)
    cy.get('[data-test="signin-password"]').type(password)
    cy.get('[data-test="signin-submit"]').click()
  })

  it('Deve exibir o histórico de transações de usuário corretamente', () => {

    cy.get('[data-test="nav-personal-tab"]').click()
    
  })

})
