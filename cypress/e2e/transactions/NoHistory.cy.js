describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {

    const username = 'natanaelmartiny'
    const password = '123456'

    beforeEach(() => {
        cy.visit('/signin')
        cy.get('[data-test="signin-username"]').type(username)
        cy.get('[data-test="signin-password"]').type(password)
        cy.get('[data-test="signin-submit"]').click()
    })

    it('Deve exibir uma mensagem indicando que o usuário não possui histórico de transações', () => {

        cy.get('[data-test="nav-personal-tab"]').click()
        cy.contains('No Transactions').should('be.visible')

    })

})