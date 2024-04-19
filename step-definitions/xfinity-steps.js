module.exports = function () {

    this.Given('I am on the xfinity page', function () {
        return helpers.loadPage(page.xfinity.url);
    });

    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.xfinity.clickElement(objectKey);
    });

    this.When(/^I scroll to "([^"]*)"$/, function (objectKey) {
        return page.xfinity.scrollToElement(objectKey);
    });
    
    this.When(/^I enter username "([^"]*)"$/ , function(objKey1) {
        return page.xfinity.inputUserName(objKey1);
    });

    this.When(/^I enter password "([^"]*)"$/, function(objKey1) {
        return page.xfinity.inputPassword(objKey1);
    });
    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.xfinity.elementExists(objectKey);
    });


    this.Given(/^I am logged on to the xfinity portal as "([^"]*)"$/, function (user) {
        return page.xfinity.loginPortal(user);
    });

    this.Then(/^I should see the approver name as "([^"]*)"$/, function (value) {
        return page.xfinity.verifyApproverName(value);
    });
    this.When(/^I enter the inputs for login$/, async function (table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
            page.xfinity.inputElement(fields[i][0], fields[i][1]);
        };
        await driver.sleep(3000);
        return;
    });
    


};
