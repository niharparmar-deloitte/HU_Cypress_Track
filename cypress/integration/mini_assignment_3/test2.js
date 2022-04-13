describe('checkbox',()=>{
    it('clicking on checkbox',()=>{
        cy.visit('https://demoqa.com/elements')
        cy.url().should('eq', 'https://demoqa.com/elements')
        cy.get('#item-1').click()
        cy.get('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.check-box-tree-wrapper:nth-child(2) div.react-checkbox-tree.rct-icons-fa4 ol:nth-child(2) li.rct-node.rct-node-parent.rct-node-collapsed span.rct-text > button.rct-collapse.rct-collapse-btn:nth-child(1)').click()
        cy.get('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.check-box-tree-wrapper:nth-child(2) div.react-checkbox-tree.rct-icons-fa4 li.rct-node.rct-node-parent.rct-node-expanded ol:nth-child(2) li.rct-node.rct-node-parent.rct-node-collapsed:nth-child(2) span.rct-text label:nth-child(2) > span.rct-checkbox:nth-child(2)').click()
        cy.get('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.check-box-tree-wrapper:nth-child(2) div.display-result.mt-4 > span.text-success:nth-child(2)').should('be.visible')

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })  
})