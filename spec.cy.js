/// <reference types="Cypress" /> 

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})





describe('A szóról szóra webhely tesztjei', () => {
  it('Létezik a JÁTÉK INDÍTÁSA feliratú gomb', () => {
    cy.visit('https://www.szorolszorajatek.hu/');
    cy.contains('#popUpYes','JÁTÉK INDÍTÁSA').should('exist');

  })

    it('Ha a gombra kattintunk, akkor megjelenik az oldalon egy div, megoldas id-vel', () => {
    cy.visit('https://www.szorolszorajatek.hu/');
    cy.get('#popUpYes').contains('JÁTÉK INDÍTÁSA').click();
    cy.get('#megoldas').should('exist');


  })


    it('Megjelennek az oldalon a virtuális billentyűzet numpad id-vel rendelkező input elemei', () => {
    cy.visit('https://www.szorolszorajatek.hu/');
    cy.get('#popUpYes').click();
    cy.get('input#numpad').should('exist')

  })


      it('Ezekből az elemekből 35 db van.', () => {
    cy.visit('https://www.szorolszorajatek.hu/');
    cy.get('#popUpYes').click();
    cy.get('div.desktop > input#numpad').should('have.length',35);


  })

  

  
      it('6. Ha beírunk egy betűt, majd a visszatörlés gombra kattintunk, akkor a megoldas div üres lesz', () => {
    cy.visit('https://www.szorolszorajatek.hu/');
    cy.get('#popUpYes').click();
    cy.get('.desktop > [value="p"]').click();
    cy.get('#numdel2').click();
    cy.get('#megoldas').should('be.empty');
    cy.get('#megoldas').should('have.text','')
  


  })





        it('7. Ha beírjuk az APA szöveget, az megjelenik a megoldas id-jű div-ben', () => {
    cy.visit('https://www.szorolszorajatek.hu/');
    cy.get('#popUpYes').click();
    cy.get('.desktop > [value="a"]').click();
    cy.get('.desktop > [value="p"]').click();
    cy.get('.desktop > [value="a"]').click();
    cy.get('#megoldas').contains('apa');


  })

  
    it('8. Ha beírjuk az APA szöveget, majd a kuka gombra kattintunk, akkor a megoldas div üres lesz', () => {
    cy.visit('https://www.szorolszorajatek.hu/');
    cy.get('#popUpYes').click();
    cy.get('.desktop > [value="a"]').click();
    cy.get('.desktop > [value="p"]').click();
    cy.get('.desktop > [value="a"]').click();
    cy.get('#clear').click();
    cy.get('#megoldas').should('be.empty');


  })

   it('9. Ha beírjuk a KALAP szöveget, majd az OK gombra kattintunk, akkor a KALAP szöveg megjelenik a szómátrix első sorában', () => {
    cy.visit('https://www.szorolszorajatek.hu/');
    cy.get('#popUpYes').click();
    cy.get('.desktop > [value="k"]').click();
    cy.get('.desktop > [value="a"]').click();
    cy.get('.desktop > [value="l"]').click();
    cy.get('.desktop > [value="a"]').click();
    cy.get('.desktop > [value="p"]').click();
    cy.get('.desktop > #enter').click();
    cy.get('table > tbody > tr').eq(0).should('have.text','kalap');


  })


     it.only('10. A KALAP szöveg beírása után a billentyűzet A betűje már nem alapgomb osztályú lesz, hanem nincsgomb, vagy vangomb osztályú', () => {
    cy.visit('https://www.szorolszorajatek.hu/');
    cy.get('#popUpYes').click();
    cy.get('.desktop > [value="k"]').click();
    cy.get('.desktop > [value="a"]').click();
    cy.get('.desktop > [value="l"]').click();
    cy.get('.desktop > [value="a"]').click();
    cy.get('.desktop > [value="p"]').click();
    cy.get('.desktop > #enter').click();
    cy.get('.desktop > [value="a"]').should('not.have.class','alapgomb')
    cy.get('.desktop > [value="a"]').should('have.class', 'vangomb')

  })



})


