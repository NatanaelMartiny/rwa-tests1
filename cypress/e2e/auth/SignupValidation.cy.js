describe('Signup - Validações', () => {

    beforeEach(() => {
        cy.visit('/signup')
    })

    it('Não deve permitir envio com formulário vazio', () => {

        cy.visit('/signup')

        // Click em cada campo p/ validar a mensagem
        cy.get('[name="firstName"]').click().blur()
        cy.get('[name="lastName"]').click().blur()
        cy.get('[name="username"]').click().blur()
        cy.get('[name="password"]').click().blur()
        cy.get('[name="confirmPassword"]').click().blur()

        // Validar mensagens de erro :O
        cy.contains('First Name is required').should('be.visible')
        cy.contains('Last Name is required').should('be.visible')
        cy.contains('Username is required').should('be.visible')

    })
})
