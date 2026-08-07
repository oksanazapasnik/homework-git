const { test, expect } = require('../fixtures/pages.fixture');
const testData = require('../test-data/testData');

test.describe('Products', () => {
  test('should display the All Products page with a non-empty product list', async ({
    homePage,
    productsPage,
  }) => {
    await homePage.open();
    await homePage.header.goToProducts();

    await expect(productsPage.allProductsHeading).toBeVisible();
    expect(await productsPage.getProductCount()).toBeGreaterThan(0);
  });

  for (const term of testData.searchTerms) {
    test(`should return results when searching for "${term}"`, async ({ productsPage }) => {
      await productsPage.open();
      await productsPage.searchForProduct(term);

      await expect(productsPage.searchedProductsHeading).toBeVisible();
      expect(await productsPage.getProductCount()).toBeGreaterThan(0);
    });
  }

  test('should open product details and display the product name', async ({
    productsPage,
    productDetailsPage,
  }) => {
    await productsPage.open();
    await productsPage.openProductDetailsByIndex(0);

    await expect(productDetailsPage.info).toBeVisible();
    const name = await productDetailsPage.getProductName();
    expect(name.length).toBeGreaterThan(0);
  });
});
