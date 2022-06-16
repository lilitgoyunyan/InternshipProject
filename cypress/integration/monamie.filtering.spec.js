/// <reference types="cypress"  />

describe("Price filter", () => {
	beforeEach(() => {
		cy.visit("https://www.monamie.am");
		cy.get("#ember215").click();
	});
	it("should find the price filter", () => {
		cy.xpath('//div[contains(text(),"Sort By")]').click({ force: true });
		cy.xpath('//li[contains(.,"Low-high price")]').click({ force: true });

		let first = cy.get('div[class*="row shop-items"]>:nth-child(1) div[class*="price-container__price "]').invoke('text');
		let second = cy.get('div[class*="row shop-items"]>:nth-child(2) div[class*="price-container__price "]').invoke('text');
		
		let firstStr = first.toString();
		let secondStr = second.toString();
		
		let firstLength = firstStr.length;
		let secondLength = secondStr.length;

		let finalFirst= firstStr.substring(0, firstLength - 4);
		let finalSecond = secondStr.substring(0, secondLength - 4);

		let firstPrice = parseInt(finalFirst);
		let secondPrice = parseInt(finalSecond);

		expect(firstPrice).to.be.lessThan(secondPrice)
	});
});

////ul//li[contains(.,"BY PRICE")]
//div[@class="ember-view"]/div[@class="mo-checkbox "]/following::div[contains(text(),"Under 100000 AMD")]
