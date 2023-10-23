import { Logger } from "../util/logger";
import { LoginData } from "../pages/login/login.data";
import { CartMethods } from "../pages/cart/cart.methods";
import { CommonData } from "../pages/common-page/commoN-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginMethods } from "../pages/login/login.methods";
import { homeMethods } from "../pages/home/home.methods";
import { ProductDetailsMethods } from "../pages/product-details/product-details.methods";
import { PlaceOrderMethods } from "../pages/place-order/place-order.methods";
import { PlaceOrderData } from "../pages/place-order/place-order.data";
import { thankYouForYouPurchaseMethods } from "../pages/thank-you-for-you-purchase/thank-you-for-you-purchase.methods";

const user = LoginData.validCredentials
const product = 'ASUS Full HD'

describe (CommonData.testSuites.catalogoYCompras, ()=>{
    it('Navegación por categorías', ()=>{
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado.')
        Logger.subStep('Navegate to Demoblaze application')
        CommonPageMethods.navigateToDemoBlaze()
        Logger.subStep('Click on "Log in" link')
        CommonPageMethods.clickOnLoginOption();
        LoginMethods.login(user.username, user.password)

        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMethods.clickOnHomeOption
        

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación.')
        homeMethods.clickOnMonitorsOption()
        Logger.verification('Verificar que se muestra la lista de productos correspondiente a la categoría seleccionada.')
        homeMethods.verifyProductDisplayed('Apple monitor 24')
        homeMethods.verifyProductDisplayed('ASUS Full HD')

        Logger.postCondition('Log out')
        CommonPageMethods.logout();
    })

    it('Agregar producto al carrito', ()=>{

        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado.')
        Logger.subStep('Navegate to Demoblaze application')
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Click on "Log in" link')
        CommonPageMethods.clickOnLoginOption();
        LoginMethods.login(user.username, user.password)

        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMethods.clickOnHomeOption

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación.')
        homeMethods.clickOnMonitorsOption();
        
        Logger.stepNumber(4)
        Logger.step('Hacer clic en un producto específico.')
        homeMethods.clickOnProductLink(product)
        

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestra la página de detalles del producto.')
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();
        

        Logger.stepNumber(6)
        Logger.step('Hacer clic en el botón "Add to cart".')
        ProductDetailsMethods.clickOnAddToCart();

        Logger.stepNumber(7)
        Logger.verification('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito')
        ProductDetailsMethods.verifyProductAddedMessage();
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product)

        Logger.postCondition('Empty cart and Logout')
        CartMethods.emptyCart(user.username,user.password);
        CommonPageMethods.logout();
    })

    it('Realizar una compra', ()=>{

        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado.')
        Logger.subStep('Navegate to Demoblaze application')
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Click on "Log in" link')
        CommonPageMethods.clickOnLoginOption();
        LoginMethods.login(user.username, user.password)
        cy.wait(5000)

        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio.')
        CommonPageMethods.clickOnHomeOption

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación.')
        homeMethods.clickOnMonitorsOption();
        
        Logger.stepNumber(4)
        Logger.step('Hacer clic en un producto específico.')
        homeMethods.clickOnProductLink(product)
        

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestra la página de detalles del producto.')
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();
        

        Logger.stepNumber(6)
        Logger.step('Hacer clic en el botón "Add to cart".')
        ProductDetailsMethods.clickOnAddToCart();

        Logger.stepNumber(7)
        Logger.verification('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito')
        ProductDetailsMethods.verifyProductAddedMessage();
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product)

        Logger.stepNumber(8)
        Logger.step('Hacer clic en la opcion "Cart" de la barra de navegacion.')
        CommonPageMethods.clickOnCartOption();

        Logger.stepNumber(9)
        Logger.step('Verificar que se muestra la página del carrito de compras')
        CartMethods.verifyCartPageIsShown();

        Logger.stepNumber(10)
        Logger.step('Hacer clic en el botón "Place Order".')
        CartMethods.clickOnPlaceOrderButton();

        Logger.stepNumber(11)
        Logger.step('Completar los campos obligatorios en la página de información de envío.')
        PlaceOrderMethods.insertOrderInformation(PlaceOrderData.testData)

        Logger.stepNumber(12)
        Logger.step('Hacer clic en el botón "Purchase".')
        PlaceOrderMethods.clickOnPurchaseButton();

        Logger.stepNumber(13)
        Logger.step('Verificar que se muestra un mensaje de confirmación y se redirige al usuario a la página de inicio.')
        thankYouForYouPurchaseMethods.verifyGreenCheckMarkIsDisplayed();
        cy.wait(3000);
        thankYouForYouPurchaseMethods.clickOnOKButton();
        cy.wait(3000);
        homeMethods.verifyHomePageIsShown();

        Logger.postCondition('Log out')
        CommonPageMethods.logout();
        
    })

    
})