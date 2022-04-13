describe('web tables',function(){
    before(function(){
        cy.fixture('web_tables_details').then(function(data){
            this.data=data
        })
    })
   it('adding values in table',function(){
        cy.visit('https://demoqa.com/elements')
        cy.url().should('eq', 'https://demoqa.com/elements')
        cy.get('#item-3').click()
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').type(this.data.firstname)
        cy.get('#lastName').type(this.data.lastname)
        cy.get('#userEmail').type(this.data.email)
        cy.get('#age').type(this.data.age)
        cy.get('#salary').type(this.data.salary)
        cy.get('#department').type(this.data.department)
        cy.get('#submit').click()
        cy.get('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.web-tables-wrapper:nth-child(2) div.ReactTable.-striped.-highlight div.rt-table div.rt-tbody div.rt-tr-group:nth-child(4) div.rt-tr.-even > div.rt-td:nth-child(1)').should('have.text', 'nihar')
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})