import { dropDownMenuAssertion,  historyURLAssertion } from "./booksAssertions";
import booksLocators from "./booksLocators";

export function navigate() {
	cy.visit("https://books.am/");
}

export function clickCSS(locator){
	cy.get(locator).click()
}

export function clickXpath(locator){
	cy.xpath(locator).click()
}

export function waiter(){
	cy.wait(1000);
}

export function navigateToHistoryBooksSection() {
	clickCSS(booksLocators.books)
	dropDownMenuAssertion()
	clickCSS(booksLocators.history)
	historyURLAssertion()
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


export function typeBookName(){
	cy.get(booksLocators.search).type("Dorian Gray {enter}");
	
}

