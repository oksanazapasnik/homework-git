# AutomationExercise UI Test Automation Framework

- Сайт: https://www.automationexercise.com/
- Инструмент: Playwright

---

## Установка зависимостей

```bash
npm install
npx playwright install        
```

## Запуск тестов

```bash
npm test                      # все тесты
npm run test:headed           # headed mode
npm run test:chromium         # только Chromium
npm run test:firefox          # только Firefox
```

## Отчёт

```bash
npm run report                
```


## Линтинг и форматирование

```bash
npm run lint                  # ESLint (flat config)
npm run lint:fix
npm run format                # Prettier
```

---

## Структура проекта

```
ae-e2e/
├── tests/                      
│   ├── auth.spec.js            #   Account: регистрация, логин, логаут, ошибки
│   ├── products.spec.js        #   Products: каталог, поиск, детали товара
│   ├── cart.spec.js            #   Cart: добавление товара из списка и деталей
│   ├── contact.spec.js         #   Contact: форма обратной связи
│   └── subscription.spec.js    #   Subscription: подписка в футере
│
├── pages/  
│   ├── components/   
│       ├── HeaderComponent.js 
│       └── FooterComponent.js                 
│   ├── BasePage.js            
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── SignupPage.js
│   ├── ProductsPage.js
│   ├── ProductDetailsPage.js
│   ├── CartPage.js
│   └── ContactUsPage.js
│
├── fixtures/
│   └── pages.fixture.js
│
├── test-data/
│   └── testData.js
│
├── helpers/
│   ├── dataGenerators.js   
│   └── consent.js       
│
├── playwright.config.js
├── package.json
├── eslint.config.js
├── .prettierrc.json
├── TEST_CASES.md              
└── README.md
```

---

## Реализованные тестовые сценарии

**Account**

1. Регистрация нового пользователя и удаление аккаунта.
2. Логин с валидными данными и логаут.
3. Ошибка при регистрации с уже существующим email.
4. Ошибка при логине с невалидными данными (data-driven, 3 набора).

**Products** 

5. Страница «All Products» отображает непустой список товаров. 
6. Поиск товара по валидному запросу (data-driven: dress, top, jeans, tshirt). 
7. Открытие страницы товара и отображение его названия.

**Cart** 

8. Добавление товара в корзину из списка товаров. 
9. Добавление товара в корзину со страницы деталей с выбранным количеством.

**Contact** 

10. Успешная отправка формы обратной связи.

**Subscription** 

11. Подписка на рассылку из футера главной страницы. 
12. Подписка на рассылку из футера страницы корзины.


