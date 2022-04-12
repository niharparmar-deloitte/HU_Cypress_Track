// const chai = require('chai')
// , assert = chai.assert
// , expect = chai.expect
// , should = chai.should()

// describe("Validating URL",function(){
//     let title = 'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!'
//         it('verify title', function(){
//             title.should.be.a('string')
//             expect(title).to.be.a('string')
//             title.should.have.lengthOf(104)
//     });

//     let loginTitle = 'Login'
//     let loginTitle1 = 'Get access to your Orders, Wishlist and Recommendations'
//         it('verify title of login', function(){
//             loginTitle.should.be.a('string')
//             expect(loginTitle).to.be.a('string')
//             loginTitle1.should.be.a('string')
//             expect(loginTitle1).to.be.a('string')
//         })

// });

import {expect} from "chai";

describe("validation with chai",function(){

    browser.url("http://www.flipkart.com");
    it("getting title",()=>{
        const title=browser.getTitle();
        expect(title).to.equal("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
    });

    it("getting text", ()=>{
        const text =browser.should("have.text","Login")
        expect(text).to.equal("Login")
        const text1 =browser.should("have.text","Get access to your Orders, Wishlist and Recommendations")
        expect(text1).to.equal("Get access to your Orders, Wishlist and Recommendations")
    });

});