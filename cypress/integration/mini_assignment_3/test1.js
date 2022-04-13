

describe('textbox handling', function() {
    before(function(){
        cy.fixture('textbox_details').then(function(data){
            this.data=data
        })
    })

    it('textboxDetails', function(){
         cy.visit('https://demoqa.com/text-box')
         cy.url().should('eq', 'https://demoqa.com/text-box')
         cy.get('#userName').type(this.data.name)
         cy.get('#userEmail').type(this.data.email)
         cy.get('#currentAddress').type(this.data.currentAddress)
         cy.get('#permanentAddress').type(this.data.permanentAddress)
         cy.get('#submit').click()
         cy.scrollTo('top')

    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})