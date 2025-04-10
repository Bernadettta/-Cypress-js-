describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); // нашли кнопку войти и нажали на нее
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //после автор. вижу текст
         cy.get('#messageHeader').should('be.visible'); //текст виден польз
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // нашли крестик и он виден
        }) 

        it('Восстановление пароля', function () {
            cy.visit('https://login.qa.studio/'); // зашли на сайт
            cy.get('#forgotEmailButton').click(); // нажимаю восстановить пароль
            cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели почту для восстановления
            cy.get('#restoreEmailButton').click(); // нажал кнопку отправить код
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //после автор вижу текст
            cy.get('#messageHeader').should('be.visible'); //текст виден польз
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // нашли крестик и он виден
           }) 

        it('Неверный логин и верный пароль', function () {
            cy.visit('https://login.qa.studio/'); // зашли на сайт
            cy.get('#mail').type('german123@dolnikov.ru'); // ввели НЕверный логин
            cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
            cy.get('#loginButton').click(); // нашли кнопку войти и нажали на нее
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); //после автор вижу текст
            cy.get('#messageHeader').should('be.visible'); //текст виден польз
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // нашли крестик и он виден
           }) 

           it('Верный логин и неверный пароль', function () {
            cy.visit('https://login.qa.studio/'); // зашли на сайт
            cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
            cy.get('#pass').type('iLoveqastudio123'); // ввели НЕверный пароль
            cy.get('#loginButton').click(); // нашли кнопку войти и нажали на нее
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); //после автор вижу текст
            cy.get('#messageHeader').should('be.visible'); //текст виден польз
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // нашли крестик и он виден
           }) 

           it('Логин без @ и верный пароль', function () {
            cy.visit('https://login.qa.studio/'); // зашли на сайт
            cy.get('#mail').type('germandolnikov.ru'); // ввели логин без @
            cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
            cy.get('#loginButton').click(); // нашли кнопку войти и нажали на нее
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //после автор вижу текст
            cy.get('#messageHeader').should('be.visible'); //текст виден польз
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // нашли крестик и он виден
           }) 

           it('Проверка на приведение к строчным буквам в логине', function () {
            cy.visit('https://login.qa.studio/'); // зашли на сайт
            cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели верный логин, но со смешанным регистром букв
            cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
            cy.get('#loginButton').click(); // нашли кнопку войти и нажали на нее
            cy.get('#messageHeader').contains('Авторизация прошла успешно'); //после автор. вижу текст
            cy.get('#messageHeader').should('be.visible'); //текст виден польз
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // нашли крестик и он виден
           }) 
 }) 