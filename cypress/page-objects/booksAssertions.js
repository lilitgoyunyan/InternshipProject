import booksLocators from "./booksLocators";

export function historyTextAssertion(){
	cy.xpath(booksLocators.historyTextInDetailedPage).should(
		"have.text",
		booksLocators.historyText
	);
}
export function confirmationTextAssertion(){
	cy.get(booksLocators.confirmation).should(
		"have.text",
		booksLocators.confirmationText
	);
}
export function bookTitleAssertion(){
	cy.get(booksLocators.bookTitle).should("exist");
}
export function checkOutAssertion(){
	cy.get(booksLocators.checkOut).should(
		"exist"
	);
}
export function dropDownMenuAssertion(){
	cy.get(booksLocators.hovered).should(
		"exist"
	);
}
export function dropDownFilterAssertion(){
	cy.get(booksLocators.dropDownFilter).should("exist");
}
export function dorianGrayTitleAssertion(){
	cy.get(booksLocators.dorianGrayText).should('include.text', 'Dorian');
}
export function deletePopUpAssertion(){
	cy.get(booksLocators.deletePopUpWindowText).should("exist");
}
export function shoppingBagPopUpAssertion(){
	cy.get(booksLocators.shoppingBagOpened).should("exist");
}

export function deletePopUpWindowAssertion(){
	cy.get(booksLocators.dropDownFilter).should("exist");
}
export function historyURLAssertion(){
	cy.url().should('include', booksLocators.URLText)
}
export function dorianGrayURLAssertion(){
	cy.url().should('include', booksLocators.dorianGrayURL)
	
}
export function checkoutURLAssertion(){
	cy.url().should('include', booksLocators.checkoutURL)
	
}
export function emptyBagAssertion(){
	cy.get(booksLocators.emptyBagText).should('include.text', "Ձեր զամբյուղում ոչինչ առկա չէ");
}

