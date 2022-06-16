/// <reference types="cypress"  />

import { MonAmie } from "../page-objects/monamie"




// it('should be check if shop is displayed and clickable', () =>{
//     cy.visit('https://www.monamie.am') 
//     cy.get("#ember215").click()
//     cy.get("#ember215").should('have.text', 'Shop')
//     cy.get(':nth-child(2)>.shop-item .mo-btn').scrollIntoView()
//     cy.xpath('(//div[@class ="mo-btn btn1  "]) [4]').click({force: true})
//     cy
//     .get('div[class*="info__right__quantity"]>div[class*="shop-item"]')
//     .should('exist');
// })
describe('checks the add to card functionality', () => {
    const monAmie = new MonAmie()
   beforeEach(()=>{
        monAmie.navigate()
        monAmie.navigateToShopPage()

    })
it('should be check if shop is displayed and clickable', () =>{
    cy.visit('https://www.monamie.am') 
    cy.get("#ember215").click()
    cy.get("#ember215").should('have.text', 'Shop')
})
it('should be able to check if a new window is opened after clicking add to card and quantity should be displayed',()=>{
    cy.get(':nth-child(2)>.shop-item .mo-btn').scrollIntoView()
    cy.xpath('(//div[@class ="mo-btn btn1  "]) [4]').click({force: true})
    cy.get('div[class*="info__right__quantity"]>div[class*="shop-item"]').should('exist');
})
})

// const locators = {
//     shopButton: "#ember215",
//     flowersAndDesignDiv: "div[class*='mo-home__hero-img__info__title']",
//     //:first-child does not work, however there are six of these
//     flowerTitle: '//div[contains(text(),"Summer Sun")]',
//     addToBag: ":nth-child(4)>.shop-item .mo-btn",
//     weddingButton: '//*[@id="ember220"]',
//     oneFlower: "//div[contains(text(),'Մեկ ծաղիկ')]",
//     //unique chi
//     filterLanguage: 'ul[class*="drop-down"] :nth-child(2)'

// }

