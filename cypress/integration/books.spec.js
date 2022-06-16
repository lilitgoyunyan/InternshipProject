/// <reference types="cypress"  />
import { navigate, navigateToHistoryBooksSection, typeBookName, clickCSS, clickXpath, waiter} from "../page-objects/booksFunctions";
import books from "../page-objects/booksFunctions";
import bookLocators from "../page-objects/booksLocators"
import { bookTitleAssertion, checkOutAssertion, checkoutURLAssertion, confirmationTextAssertion, deletePopUpAssertion, deletePopUpWindowAssertion, dorianGrayTitleAssertion, dorianGrayURLAssertion, dropDownFilterAssertion, emptyBagAssertion, historyTextAssertion, shoppingBagPopUpAssertion } from "../page-objects/booksAssertions";

describe("checks", () => {
	beforeEach(() => {
		navigate();
		
	});

	it("Genre filter functionality.", () => {
		navigateToHistoryBooksSection();
		clickCSS(bookLocators.firstBook)
		historyTextAssertion()
		navigate();
		navigateToHistoryBooksSection();
		clickCSS(bookLocators.secondBook)
		historyTextAssertion()
		navigate();
		navigateToHistoryBooksSection();
		clickCSS(bookLocators.thirdBook)
		historyTextAssertion()
	});

	it("Price filter functionality", () => {
		navigateToHistoryBooksSection();
		clickXpath(bookLocators.filter)
		dropDownFilterAssertion()
		waiter()
		clickXpath(bookLocators.priceFilter)
		books.priceComparer(
			bookLocators.firstBookPrice,
			bookLocators.secondBookPrice
		);

	});
	it("Add to card functionality", () => {
		typeBookName();
		dorianGrayTitleAssertion()
		clickXpath(bookLocators.open);
		dorianGrayURLAssertion()
		clickCSS(bookLocators.addToCard)
		confirmationTextAssertion()
		clickCSS(bookLocators.shoppingBag)
		shoppingBagPopUpAssertion()
		bookTitleAssertion()
		clickCSS(bookLocators.order)
		checkoutURLAssertion()
		checkOutAssertion()
	});

	it.only("Clear bag functionality", () => {
		typeBookName();
		dorianGrayTitleAssertion()
		clickXpath(bookLocators.open)
		dorianGrayURLAssertion()
		clickCSS(bookLocators.addToCard)
		confirmationTextAssertion()
		clickCSS(bookLocators.shoppingBag)
		shoppingBagPopUpAssertion()
		clickCSS(bookLocators.emptyBag)
		deletePopUpWindowAssertion()
		deletePopUpAssertion()
		clickCSS(bookLocators.yesDelete)
		emptyBagAssertion()
		
	});

});



