class diffcategory{

    getmonitorid(){
        cy.get('[id="itemc"]').each(($ele,index)=>{
            const lapText = $ele.text()
            if(lapText.includes('Monitors'))
            {
                cy.get('[id="itemc"]').eq(index).click({force:true})
                cy.wait(2000)
            }
        })
    }

    getproductmid(monitor){
        cy.get('.hrefch').each(($ele,index)=>{
            const canText = $ele.text()
            if(canText.includes(monitor))
            {
                cy.get('.hrefch').eq(index).click({force:true})
            }
        })
    }

    getaddcartmonitorbutton(){
       return cy.get('a[class="btn btn-success btn-lg"]').click({force:true})
    }
}

export default diffcategory