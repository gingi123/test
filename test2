/// <reference types="Cypress" />

describe('navigation', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="header-about-link"]').click()
    cy.location('pathname').should('eq','/about')
    cy.go('back')
    cy.location('pathname').should('eq','/')
  })
})



/// <reference types= "cypress" />



describe('template spec', () => {
  it('1. Van Sign Up cím', () => {
    cy.visit('https://soosgabor.github.io/testPage')
    cy.get('[href="/testPage/signup"]').should('exist');
  })



    it('2.Van Username beviteli mező', () => {
    cy.visit('https://soosgabor.github.io/testPage')
    cy.get('[href="/testPage/signup"]').click();
    cy.get('#username').should('exist');
  })

    it('3. Van e-mail beviteli mező', () => {
    cy.visit('https://soosgabor.github.io/testPage');
    cy.get('[href="/testPage/signup"]').click();
    cy.get('#e-mail').should('exist');
   
  })

    it('4.Van jelszó beviteli mező', () => {
    cy.visit('https://soosgabor.github.io/testPage');
    cy.get('[href="/testPage/signup"]').click();
    cy.get('#password').should('exist');
   
  })

 it('5.A jelszó beviteli mező password típusú', () => {
    cy.visit('https://soosgabor.github.io/testPage');
    cy.get('[href="/testPage/signup"]').click();
    cy.get('#password').should('have.attr','type','password')
   
  })

   it('6. Van Password Repeat beviteli mező', () => {
    cy.visit('https://soosgabor.github.io/testPage');
    cy.get('[href="/testPage/signup"]').click();
    cy.get('#password-repeat').should('exist');
   
  })


  it('7.A jelszó ismétlés beviteli mező password típusú', () => {
    cy.visit('https://soosgabor.github.io/testPage');
    cy.get('[href="/testPage/signup"]').click();
    cy.get('#password-repeat').should('have.attr','type','password')
   
  })


    it('8. Van Sign Up gomb', () => {
    cy.visit('https://soosgabor.github.io/testPage');
    cy.get('[href="/testPage/signup"]').click();
    cy.get('.btn').should('exist')
   
  })

    it('9. Kezdetben a gomb le van tiltva', () => {
    cy.visit('https://soosgabor.github.io/testPage');
    cy.get('[href="/testPage/signup"]').click();
    cy.get('.btn').should('be.disabled');
   
  })


   it('9. Ha a jelszavak nem egyeznek, hibát jelez', () => {
    cy.visit('https://soosgabor.github.io/testPage');
    cy.get('[href="/testPage/signup"]').click();
    cy.get('#password').type('1234');
    cy.get('#error').should('have.text','Password mismatch');
  })



     it.only('10.Ha ugyanaz az érték lesz beállítva a jelszóhoz, engedélyezve lesz a gomb', () => {
    cy.visit('https://soosgabor.github.io/testPage');
    cy.get('[href="/testPage/signup"]').click();
    cy.get('#password').type('1234');
    cy.get('#password-repeat').type('1234');
    cy.get('.btn').should('not.be.disabled');
  })


})
