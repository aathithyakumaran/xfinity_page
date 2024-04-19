const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    url: 'https://www.xfinity.com/overview',

    elements: {
        letsgo: '//*[@id="sign_in"]/prism-text',
        loginHeader: '//*[@id="formPanel"]/div/form/div/span',
        username: '//*[@id="user"]',
        password: by.name('password'),
        loginButton: '//*[@id="root"]/section/header/xc-header/div[2]/div/ul/li[6]/a',
        invalidaddress: '//*[@id="prism-button-ced3cc6c-213e-4503-938d-bde5192afecf"]',
        inputname: '//*[@id="user"]',
        passwordHeader: '//*[@id="formPanel"]/div/form/prism-text[2]',
        internetoption : '//*[@id="root"]/section/main/div[3]/div/div/div[3]/div/div[1]/a/div/img',
        availabilityButton: '//*[@id="prism-button-9972fd29-c363-4a01-a662-0bd31a7c438c"]/prism-text',
        internetplan:'//*[@id="root"]/section/main/div[2]/div/div[2]',
        buildyourplan:'//*[@id="root"]/section/main/div[3]/div/div/div[3]/div/div[5]/a/div/img',
        planButton:'//*[@id="root"]/section/main/div/div/div/span[1]',
        wifipass: '//*[@id="image-b8d99c9b-1c5f-4777-ac3e-db75773fb6d2"]/div[1]/picture/img',
        getnowwifipassbutton:'//*[@id="prism-button-5db7bc3d-2c42-4bf5-804a-868e8551e7a7"]',
        hotspotbutton:'//*[@id="prism-button-177c1072-ae20-4f37-885a-583ae6c8b403"]',
        getnowon:'//*[@id="prism-button-a2cddbf5-bb4e-49a9-8b96-383ca82c44cb"]',

    },
    content : {
        'Adams, Jimmy': 'Adams, Jimmy',
        'ADMIN, CLT' : 'ADMIN, CLT'
    },
    scrollToElement: async function(objectKey) {
        var selector = page.xfinity.elements[objectKey];
        await driver.sleep(3000);
        return helpers.scrollToElement(driver.findElement(By.xpath(selector)));
    },
    
    clickElement: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.xfinity.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },
    inputUserName: async function(val) {
        var selector = page.xfinity.elements['user']; 
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },
    inputPassword: async function(val) {
        var selector = page.xfinity.elements['password']; 
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },
    inputElement: async function(name,val) {
        var selector = page.xfinity.elements[name]; 
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },
    elementExists: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.xfinity.elements[objectKey];

        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },
    loginPortal: async function(username) {
        await helpers.loadPage(page.xfinity.url);
        await this.inputUserName(username)
        await this.inputPassword(page.xfinity.elements['PasswordVal'])
        await this.clickElement('LoginBtn')
        await driver.sleep(2000); 
        return;
    },
    verifyApproverName: async function(val) {
        var selector = page.xfinity.elements['approverName'];
        var result = await driver.findElement(By.xpath(selector)).getAttribute("value");
        assert.equal(page.xfinity.content[val], result);
    }
};
