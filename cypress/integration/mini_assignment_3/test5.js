describe('Links',function(){
    it('validating links',function(){
        cy.visit('https://demoqa.com/elements')
        cy.url().should('eq', 'https://demoqa.com/elements')
        cy.get('#item-5').click()
        cy.get('#simpleLink').should('have.text','Home')
        

    })
})