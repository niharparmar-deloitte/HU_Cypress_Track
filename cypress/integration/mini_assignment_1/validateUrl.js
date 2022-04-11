describe("Validating URL",function(){
    it("verify title",function(){
        cy.visit("http://www.flipkart.com")
        cy.title().should("eq","Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!")
        cy.get('._1_3w1N').click()
        cy.get('._1D1L_j > ._2KpZ6l').click()
        cy.get('._2YULOR > span').should("have.text","Please enter valid Email ID/Mobile number")
        cy.get('._36KMOx > span').should("have.text","Login")
        cy.get('._1-pxlW').should("have.text","Get access to your Orders, Wishlist and Recommendations")
        cy.get('._2doB4z').click()
    })
})
