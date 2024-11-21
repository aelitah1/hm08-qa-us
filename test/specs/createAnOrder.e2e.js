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


    it.only('should select the Supportive plan', async () => {
       await browser.url('/')
       await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
       const planSelector = await $(page.planSelector);
       await planSelector.waitForDisplayed()
       await planSelector.click();
       await expect(planSelector).toBeExisting();
   })


        it('should add a credit card', async () => {
            await browser.url('/') 
            await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
            const cardPayment = await $(page.Payment);
            await expect cardPayment.click();




          })

        it('should send a message to the driver', async () => {
            await browser.url('/') 
            await page.click('#send-message-button') 
            await page.fill('textarea[id="message-text"]', 'Hello, thanks for the ride.') 
            await page.click('#send-button') 
            await expect(await helper.getElementByText('Message sent successfully')).toBeExisting()
            })

            it('should order a blanket and handkerchiefs', async () => {
                await browser.url('/') 
                await page.click('#order-button') 
                await page.click('#blanket-checkbox') 
                await page.click('#handkerchiefs-checkbox') 
                await page.click('#proceed-button') 
                await expect(await helper.getElementByText('#order-status', 'Order placed successfully')).toBeExisting()
                await expect(await helper.getElementByCss('#order-status', 'background-color: green')).toBeExisting()
                })
                

                it('should order 2 ice creams', async () => {
                    await browser.url('/') 
                    await page.click('#ice-cream-menu') 
                    await page.click('#ice-cream-option') 
                    await page.click('#add-to-cart-button') 
                    await page.click('#add-to-cart-button') 
                    await page.click('#proceed-to-checkout-button') 
                    await expect(await helper.getElementByText('#order-summary', '2 x Ice Cream')).toBeExisting()
                    await expect(await helper.getElementByText('#order-summary', 'Total: $X.XX')).toBeExisting()
                    })

                    it('should open the car search modal', async () => {
                        await browser.url('/') 
                        await page.click('#search-cars-button') 
                        await expect(await helper.getElementByText('#car-search-modal', 'Search for cars')).toBeExisting()
                        await expect(await helper.getElementByCss('#car-search-modal', 'display: block')).toBeExisting()
                        })

                        it('should display driver info in the modal', async () => {
                            await browser.url('/') 
                            await page.click('#search-cars-button') 
                            await page.waitForSelector('#car-search-modal #driver-info', { timeout: 10000 }) 
                            await expect(await helper.getElementByText('#car-search-modal #driver-name', 'Driver Name')).toBeExisting()
                            await expect(await helper.getElementByText('#car-search-modal #driver-phone', 'Driver Phone')).toBeExisting()
                            })


                        });

    
