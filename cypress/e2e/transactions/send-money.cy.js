describe('Enviar dinheiro com saldo suficiente', () => {

  const username = 'Joel.Kutch'  
  const password = 's3cret'
  const receiver = 'Magdalen.Hirthe'

  beforeEach(() => {
    cy.visit('/signin')
    cy.get('[data-test="signin-username"]').type(username)
    cy.get('[data-test="signin-password"]').type(password)
    cy.get('[data-test="signin-submit"]').click()
  })

  it('Deve enviar dinheiro com sucesso (saldo suficiente)', () => {

    cy.contains('New').click()

    cy.get('[data-test="user-list-search-input"]').type(receiver)
    cy.contains(receiver).click()

    cy.get('[data-test="transaction-create-amount-input"]').type('900000000')
    cy.get('[data-test="transaction-create-description-input"]').type('Teste envio com sucesso')

    cy.get('[data-test="transaction-create-submit-payment"]').click()

    cy.contains('Transaction Submitted!').should('be.visible')
  })

  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {

    cy.contains('New').click()

    cy.get('[data-test="user-list-search-input"]').type(receiver)
    cy.contains(receiver).click()

    cy.get('[data-test="transaction-create-amount-input"]').type('999999999')
    cy.get('[data-test="transaction-create-description-input"]').type('Teste saldo insuficiente')

    cy.get('[data-test="transaction-create-submit-payment"]').click()

    cy.contains('Insufficient funds').should('be.visible')
  })

})