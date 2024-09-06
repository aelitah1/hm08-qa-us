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

    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('should select the Supportive plan', async () => {
       await browser.url('/')
       const planSelector = '#plan'
       const planOption = 'Supportive'
       await browser.waitForVisible(planSelector)
       await browser.click(planSelector)
       await browser.select(planSelector, planOption)
       await expect(await browser.getText(#${planOption})).toBe(planOption)

})
        it('should add a credit card', async () => {
            await browser.url('/') // Change to the new URL
            await page.click('#add-card-button') // Open the "Adding a card" modal
            await page.fill('input[id="card-number"]', '/') // Fill card number
            await page.fill('input[id="expiration-date"]', '/') // Fill expiration date
            await page.fill('input[id="code"]', '123') // Fill CVV
            await page.press('input[id="code"]', 'Tab') // Simulate TAB to lose focus
            await page.click('#link-button') // Click the "Link" button
            await expect(await helper.getElementByText('Card added successfully')).toBeExisting()
          })
          
          it('should send a message to the driver', async () => {
            await browser.url('/') // Change to the new URL
            await page.click('#send-message-button') // Open the "Send Message" modal
            await page.fill('textarea[id="message-text"]', 'Hello, thanks for the ride.') // Fill message text
            await page.click('#send-button') // Click the "Send" button
            await expect(await helper.getElementByText('Message sent successfully')).toBeExisting()
            })

            it('should order a blanket and handkerchiefs', async () => {
                await browser.url('/') // Change to the new URL
                await page.click('#order-button') // Click the "Order" button
                await page.click('#blanket-checkbox') // Select the blanket option
                await page.click('#handkerchiefs-checkbox') // Select the handkerchiefs option
                await page.click('#proceed-button') // Click the "Proceed" button
                await expect(await helper.getElementByText('#order-status', 'Order placed successfully')).toBeExisting()
                await expect(await helper.getElementByCss('#order-status', 'background-color: green')).toBeExisting()
                })
                

                it('should order 2 ice creams', async () => {
                    await browser.url('/') // Change to the new URL
                    await page.click('#ice-cream-menu') // Open the ice cream menu
                    await page.click('#ice-cream-option') // Select an ice cream option
                    await page.click('#add-to-cart-button') // Add to cart
                    await page.click('#add-to-cart-button') // Add to cart again to order 2
                    await page.click('#proceed-to-checkout-button') // Proceed to checkout
                    await expect(await helper.getElementByText('#order-summary', '2 x Ice Cream')).toBeExisting()
                    await expect(await helper.getElementByText('#order-summary', 'Total: $X.XX')).toBeExisting()
                    })

                    it('should open the car search modal', async () => {
                        await browser.url('/') // Change to the new URL
                        await page.click('#search-cars-button') // Click the "Search Cars" button
                        await expect(await helper.getElementByText('#car-search-modal', 'Search for cars')).toBeExisting()
                        await expect(await helper.getElementByCss('#car-search-modal', 'display: block')).toBeExisting()
                        })

                        it('should display driver info in the modal', async () => {
                            await browser.url('/') // Change to the new URL
                            await page.click('#search-cars-button') // Click the "Search Cars" button
                            await page.waitForSelector('#car-search-modal #driver-info', { timeout: 10000 }) // Wait for driver info to appear
                            await expect(await helper.getElementByText('#car-search-modal #driver-name', 'Driver Name')).toBeExisting()
                            await expect(await helper.getElementByText('#car-search-modal #driver-phone', 'Driver Phone')).toBeExisting()
                            })




     })

    
