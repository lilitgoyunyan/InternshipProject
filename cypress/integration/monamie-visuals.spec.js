/// <reference types="cypress"  />
import {navigate,navigateToShopPage} from '../page-objects/monamie.js'
describe('visual validation', () => {
    before(()=>{
        navigate()
    })
    it('should look good', () =>{
        navigateToShopPage
    })
})