
class products{

    getlaptopid(){
        cy.get('[id="itemc"]').each(($ele,index)=>{
            const lapText = $ele.text()
            if(lapText.includes('Laptops'))
            {
                cy.get('[id="itemc"]').eq(index).click({force:true})
                cy.wait(2000)
            }
        })
    }

    getproductid(lappy){
        cy.get('.hrefch').each(($ele,index)=>{
            const canText = $ele.text()
            if(canText.includes(lappy))
            {
                cy.get('.hrefch').eq(index).click({force:true})
            }
        })
    }

     getaddtocart(){
         return cy.get('a[class="btn btn-success btn-lg"]').click({force:true})
     }

    getpophandle(){
        return cy.get('.modal-footer > button:nth-child(2)')
    }

    getvalidateprice(){
        let price1
        let price2
        cy.get('#tbodyid > :nth-child(1) > :nth-child(3)').then(($btn)=>{
            const price1=$btn.text()

        cy.get('#tbodyid > :nth-child(2) > :nth-child(3)').then(($btn)=>{
            const price2=$btn.text()

        cy.get('#totalp').should(($btn2) => {
            expect(parseInt($btn2.text())).eq(parseInt(price1)+parseInt(price2))

          })

        })
        })

        return this
    }

    getcartbutton(){
        return cy.get('#cartur').click({force:true})
    }

    getplaceorder(){
        return cy.get('button[class="btn btn-success"]').click({force:true})
    }

    getuname(pname,pcountry,pcity,pcard,pmonth,pyear){
        cy.get('#name').type(pname)
        cy.get('#country').type(pcountry)
        cy.get('#city').type(pcity)
        cy.get('#card').type(pcard)
        cy.get('#month').type(pmonth)
        cy.get('#year').type(pyear)
    }

    getpurchasebutton(){
        cy.get('button[onclick="purchaseOrder()"]').click({force:true})
    }


}
export default products

Cypress.on('uncaught:exception', (err, runnable) => {

    return false
})