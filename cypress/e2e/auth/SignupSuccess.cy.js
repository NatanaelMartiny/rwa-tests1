import { faker } from '@faker-js/faker';

describe('Registro de novo usuário com sucesso', () => {

  it('Deve registrar um novo usuário com informações válidas', () => {

    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()

    const usuario = {
      firstName,
      lastName,
      username: (firstName + lastName).toLowerCase(),
      password: 's3cret',
      confirmPassword: 's3cret'
    }

    cy.visit('/')

    cy.get('[data-test="signup"]').click()
    cy.get('[name="firstName"]').type(usuario.firstName)
    cy.get('[name="lastName"]').type(usuario.lastName)
    cy.get('[name="username"]').type(usuario.username)
    cy.get('[name="password"]').type(usuario.password)
    cy.get('[name="confirmPassword"]').type(usuario.confirmPassword)
    cy.get('[data-test="signup-submit"]').click()

    cy.get('[data-test="signin-submit"]')
      .should('be.visible')
      .and('contain', 'Sign In')

  })

})

