import loginPage from "../PageObjects/loginPage";
import products from "../PageObjects/products";
import diffcategory from "../PageObjects/diffcategory";

describe('Different Categories Page', function(){
    before(function(){
        
        cy.fixture('login').then(function(data)
        {
            this.data=data
        })
    })

    it.only('Product Store Place an order for multiple products with different category',function(){
        const pd = new products();
        const lp = new loginPage();
        const df = new diffcategory();
        cy.visit('https://www.demoblaze.com/index.html#');
        lp.getloginlink().click()
        lp.getlogininput().clear().type(this.data.validusername);
        lp.getpasswordinput().clear().type(this.data.validpassword);
        lp.getsigninbutton().click()
        pd.getlaptopid()
        pd.getproductid(this.data.name)
        pd.getaddtocart()
        cy.go(-1)
        cy.go(-1)
        df.getmonitorid()
        df.getproductmid(this.data.monitor)
        df.getaddcartmonitorbutton()
        pd.getcartbutton()
        pd.getvalidateprice()
        pd.getplaceorder()
        pd.getuname(this.data.pname,this.data.pcountry,this.data.pcity,this.data.pcard,this.data.pmonth,this.data.pyear)
        pd.getpurchasebutton()

    })
})