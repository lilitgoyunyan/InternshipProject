import booksLocators from "./booksLocators";
export function navigate() {
	cy.visit("https://books.am/");
}
export function navigateToHistoryBooksSection() {
	cy.get(booksLocators.books).click();
	cy.get(booksLocators.history).click();
}

export default {
	priceComparer: (firstSelector,secondSelector) => {
		cy.get(firstSelector)
			.invoke("text")
			.then((a) => {
				cy.get(secondSelector)
					.invoke("text")
					.then((s) => {
						let firstLength = s.length;
						let secondLength = a.length;
                        const firstPrice=parseInt(s.slice(0, firstLength - 11));
                        const secondPrice=parseInt(a.slice(0, secondLength - 11));
						expect(firstPrice).to.be.greaterThan(secondPrice);
					});
			});
	},
};
export function getClick(locator){
	cy.get(locator).click()
}

export function xpathAssertWithHistoryText(){
	cy.xpath(booksLocators.historyTextInDetailedPage).should(
		"have.text",
		booksLocators.historyText
	);
}
export function xpathClick(locator){
	cy.xpath(locator).click()
}

export function waiter(){
	cy.wait(1000);
}

export function typeBookName(){
	cy.get(booksLocators.search).type("Dorian Gray {enter}");
	
}
