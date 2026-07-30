| №   | Element                       | CSS Locator                                                        | XPath Locator                                                                | Playwright Locator                                                          | Is locator stable? | Explanation |
| --- | ----------------------------- | ------------------------------------------------------------------ | -----------------------------------------------------------------------      | ------------------                                                          | ------------------ | ----------- |
| 1   | Menu button                   | button[aria-label='Open menu']                                     | //button[@aria-label='Open menu']                                            | page.getByRole('button', { name: 'Open menu' })                             | Yes/No             | ...         |
| 2   | Header BBC Logo               | #bbc-header svg[category='logo']                                   | //header//*[name()='svg' and @category='logo']                               | page.locator('#bbc-header').locator('svg')                                  | Yes/No             | ...         |
| 3   | Sign In button                | button[aria-label="Sign In"]                                       | //button[@aria-label="Sign In"]                                              | page.getByRole('button', { name: 'Sign In' })                               | Yes/No             | ...         |
| 4   | Main image of the news        | div[data-testid="card-media"] img                                  | (//div[@data-testid="card-media"]//img)[1]                                   | page.getByTestId('card-media').first().locator('img')                       | Yes/No             | ...         |
| 5   | Main news headline            | div[data-testid="card-text-wrapper"] a                             | //div[@data-testid="card-text-wrapper"]//a                                   | page.getByTestId('card-text-wrapper').locator('a')                          | Yes/No             | ...         |
| 6   | Time of news publication      | span[data-testid="card-metadata-lastupdated"]                      | (//span[@data-testid="card-metadata-lastupdated"])[1]                        | page.getByTestId('card-metadata-lastupdated').first()                       | Yes/No             | ...         |
| 7   | Advertising block             | div[data-testid^="dotcom-mid"]                                     | (//div[contains(@data-testid,"dotcom-mid")])[1]                              | page.locator('div[data-testid^="dotcom-mid"]').first()                      | Yes/No             | ...         |
| 8   | News title in the side column | div[data-testid="manchester-card"] h2[data-testid="card-headline"] | (//div[@data-testid="manchester-card"]//h2[@data-testid="card-headline"])[1] | page.getByTestId('manchester-card').getByTestId('card-headline').first()    | Yes/No             | ...         |
| 9   | Navigation menu item          | a[data-testid="mainNavigationLink"]                                | (//a[@data-testid="mainNavigationLink"])[1]                                  | page.locator('a[data-testid="mainNavigationLink"]').first()                 | Yes/No             | ...         |



Самые стабильные локаторы те, что используют атрибуты aria-label и data-testid: они не зависят от структуры страницы, скорее всего не поменяются при редизайне. 
Например: button[aria-label='Open menu'], page.getByTestId('card-metadata-lastupdated').

Наименее стабильными являются те, которые зависят от структуры страницы и положения элемента.
Например: page.locator('div[data-testid^="dotcom-mid"]').first(), (//div[@data-testid="card-media"]//img)[1].

Самым сложным оказался XPath локатор для логотипа BBC, так как элемент является SVG и XPath его не находил, разбиралась как это обойти.