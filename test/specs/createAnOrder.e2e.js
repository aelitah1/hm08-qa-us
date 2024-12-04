const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    })

    it ('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })


    it('should select the Supportive plan', async () => {
       await browser.url('/')
       await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
       const planSelector = await $(page.planSelector);
       await planSelector.waitForDisplayed()
       await planSelector.click();
       await expect(planSelector).toBeExisting();
   })


        it('should add a credit card', async () => { 
            await browser.url(`/`); 
            await page.fillAddresses('East 2nd Street, 601', '1300 1st St'); 
            await page.addPaymentMethodCard();  
            const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon); 
            await cardPaymentMethodIcon.waitForDisplayed();
            await expect(await $(cardPaymentMethodIcon)).toBeExisting(); 
        }) 


        it('should write a message for the driver', async () => { 
          await browser.url(`/`); 
          await page.fillAddresses('East 2nd Street, 601', '1300 1st St'); 
          const actualMessage = 'message for the driver'; 
          await page.writeAMessageForADriver(actualMessage); 
          await expect($(page.messageField)).toHaveValue(actualMessage); 
       })

            
                it('should order a Blanket and handkerchiefs', async () => { 
                  await browser.url(`/`); 
                  await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
                  const planSelector = await $(page.planSelector);
                  await planSelector.waitForDisplayed()
                  await planSelector.click();
                  await page.orderBlancketAndHandkerchiefs; 
                  await expect($(page.blancketSwitch)).toBeToggled; 
              })

                
                    it('should order 2 Ice creams', async () => { 
                      await browser.url(`/`); 
                      await page.fillAddresses('East 2nd Street, 601', '1300 1st St'); 
                      const planSelector = await $(page.planSelector);
                      await planSelector.waitForDisplayed()
                      await planSelector.click();; 
                      const plusCounter = await $(page.plusCounter); 
                      await plusCounter.click(); 
                      await plusCounter.click(); 
                      const counterValue = await $(page.counterValue); 
                      await expect(counterValue).toHaveText("2"); 
                  })

                  it('should show the car search modal', async () => { 
                    await browser.url(`/`); 
                    await page.fillAddresses('East 2nd Street, 601', '1300 1st St'); 
                    const planSelector = await $(page.planSelector);
                    await planSelector.waitForDisplayed()
                    await planSelector.click(); 
                    let countryCode = '+1'; 
                    let phoneNumber = await helper.getPhoneNumber(countryCode);   
                    await page.submitPhoneNumber(phoneNumber); 
                    const actualMessage = 'Test message.'; 
                    await page.writeAMessageForADriver(actualMessage); 
                    const orderButton = await $(page.orderButton); 
                    await orderButton.waitForDisplayed(); 
                    await orderButton.click(); 
                    const carSearchModal = await $(page.carSearchModal); 
                    await expect(carSearchModal).toBeDisplayed();  
            }) 
                }); 
