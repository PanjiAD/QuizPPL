const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
const fs = require("fs");

async function logincrm() {
  let browser = await new Builder().forBrowser("chrome").build();
  let message = "Kalimat 'Administrator' dapat ditemukan";

  await browser.get("https://demo.1crmcloud.com/login.php");

  await browser
    .findElement(By.name("user_name"))
    .sendKeys("admin");
  await browser
    .findElement(By.name("user_password"))
    .sendKeys("admin", Key.RETURN);

  await browser.get("https://demo.1crmcloud.com/index.php");

  await browser.findElement(By.className("meta-profile")).click();

  await browser.get(
    "https://demo.1crmcloud.com/index.php?module=Users&action=DetailView&record=1"
  );

  let adminText = await browser
    .findElement(By.id("_form_header"))
    .findElement(By.tagName("h3"))
    .getText();

  await assert.equal(adminText, "Administrator", "Test gagal dijalankan");
  await fs.writeFile("Report_test.txt", message, "UTF-8", function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("Test berhasil dijalankan");
  });
}

logincrm();
