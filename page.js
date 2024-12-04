module.exports = { 

    // Inputs 

    fromField: '#from', 
    toField: '#to', 
    phoneNumberField: '#phone', 
    codeField: '#code', 
    cardNumber: '#number', 
    cardCode: '.card-second-row #code', 
    messageField: '//input[@id="comment"]', 
    // Buttons 
    callATaxiButton: 'button=Call a taxi', 
    planSelector: 'div=Supportive' , 
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]', 
    nextButton: 'button=Next', 
    confirmButton: 'button=Confirm', 
    paymentMethodButton: '.pp-text', 
    addCardButton: 'div=Add card', 
    linkCardButton: 'button=Link', 
    closePaymentMethodModalButton: '.payment-picker .close-button', 
    blancketSwitch: '.switch', 
    blancketSwitchToggle: '.switch-input', 
    orderButton: '.smart-button-main=Order', 
    plusCounter: 'div=+', 

    //Misc  
    cardPaymentMethodIcon: 'img[alt="card"]', 
    counterValue: ".counter-value", 
    // Modals 
    phoneNumberModal: '.modal', 
    carSearchModal: 'div=Car search', 
    // Functions 
    fillAddresses: async function(from, to) { 
        const fromField = await $(this.fromField); 
        await fromField.setValue(from); 
        const toField = await $(this.toField); 
        await toField.setValue(to); 
        const callATaxiButton = await $(this.callATaxiButton); 
        await callATaxiButton.waitForDisplayed(); 
        await callATaxiButton.click(); 
    },    
    selectSupportive: async function() { 
        const supportiveButton = await $(this.supportiveButton); 
            await supportiveButton.waitForClickable(); 
            await supportiveButton.click(); 
        },         
 fillPhoneNumber: async function(phoneNumber) { 
        const phoneNumberButton = await $(this.phoneNumberButton); 
        await phoneNumberButton.waitForDisplayed(); 
        await phoneNumberButton.click(); 
        const phoneNumberModal = await $(this.phoneNumberModal); 
        await phoneNumberModal.waitForDisplayed() 
        const phoneNumberField = await $(this.phoneNumberField); 
        await phoneNumberField.waitForDisplayed(); 
        await phoneNumberField.setValue(phoneNumber); 
    }, 
    submitPhoneNumber: async function(phoneNumber) { 
        await this.fillPhoneNumber(phoneNumber); 
        // we are starting interception of request from the moment of method call 
        await browser.setupInterceptor(); 
        await $(this.nextButton).click(); 
        // we should wait for response 
        // eslint-disable-next-line wdio/o-pause 
        await browser.pause(2000); 
        const codeField = await $(this.codeField); 
        // collect all responses 
        const requests = await browser.getRequests(); 
        // use first response 
        await expect(requests.length).toBe(1) 
        const code = await requests[0].response.body.code 
        await codeField.setValue(code) 
        await $(this.confirmButton).click() 
    }, 
    addPaymentMethodCard: async function() { 
        const paymentMethodButton = await $(this.paymentMethodButton); 
        await paymentMethodButton.waitForDisplayed(); 
        await paymentMethodButton.click(); 
        const addCardButton = await $(this.addCardButton); 
        await addCardButton.waitForDisplayed(); 
        await addCardButton.click(); 
        const cardNumber = await $(this.cardNumber); 
        await cardNumber.waitForDisplayed(); 
        await cardNumber.setValue(123414123454); 
        const cardCode = await $(this.cardCode); 
        await cardCode.waitForDisplayed 
         await cardCode.setValue(43); 
         const cardSignaturestrip = await $(this.cardSignaturestrip); 
         await cardSignaturestrip.waitForDisplayed(); 
         await cardSignaturestrip.click(); 
         const linkCardButton = await $(this.linkCardButton); 
        await linkCardButton.waitForDisplayed(), 
        await linkCardButton.click(); 
        const closePaymentMethodModalButton = await $(this.closePaymentMethodModalButton); 
        await closePaymentMethodModalButton.waitForDisplayed(); 
        await closePaymentMethodModalButton.click(); 
    }, 

 

    writeAMessageForADriver: async function(actualMessage) { 
        const messageField = await $(this.messageField); 
        await messageField.waitForDisplayed(); 
        messageField.setValue(actualMessage); 
    }, 
    orderBlancketAndHandkerchiefs: async function() { 
        const blancketSwitch = await $(this.blancketSwitch); 
        await blancketSwitch.waitForDisplayed(); 
        await blancketSwitch.click(); 
    }, 
   
}; 
