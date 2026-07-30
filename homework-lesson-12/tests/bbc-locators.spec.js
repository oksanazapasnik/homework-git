import {test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://www.bbc.com/');

    const frame = page.frameLocator('iframe[title="SP Consent Message"]');
    const agreeButton = frame.getByRole('button', {name: 'I agree'});

    if (await agreeButton.isVisible()) {
        await agreeButton.click();
    }
})

test('should display main BBC page elements', async ({page}) => {
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeVisible();
    await expect(page.locator('//button[@aria-label="Sign In"]')).toBeVisible();
    await expect(page.getByTestId('card-media').first().locator('img')).toBeVisible();
    await expect(page.getByTestId('card-text-wrapper').locator('a')).toBeVisible();
    await expect(page.getByTestId('card-metadata-lastupdated').first()).toBeVisible();
    await expect(page.locator('div[class^="Footer-styles__LegalTextParagraphStyled"]')).toContainText('All rights reserved. The BBC is not responsible for the content of external sites.')
    await expect(page.locator('div[class^="SocialFollowUs-styles__SocialFollowUsHeaderStyled"]')).toContainText('Follow BBC on:')




    const locators = [
        page.getByRole('button', { name: 'Open menu' }),
        page.locator('//button[@aria-label="Sign In"]'),
        page.getByTestId('card-media').first().locator('img'),
        page.getByTestId('card-text-wrapper').first().locator('a'),
        page.getByTestId('card-metadata-lastupdated').first(),
        page.locator('div[class^="Footer-styles__LegalTextParagraphStyled"]'),
        page.locator('div[class^="SocialFollowUs-styles__SocialFollowUsHeaderStyled"]')
    ];

    for (const locator of locators) {
        await locator.evaluate(el => {
            el.style.outline = '4px solid red';
            el.style.outlineOffset = '2px';
        });
    }

    await page.screenshot({
        path: 'screenshots/bbc-elements.png',
        fullPage: true
    });

})






