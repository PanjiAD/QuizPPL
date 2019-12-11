const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
const fs = require("fs");

async function orangehrm() {
  let browser = await new Builder().forBrowser("chrome").build();
  let message = "Kalimat 'Welcome Admin' dapat ditemukan";

  await browser.get(
    "http://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/log"
  );

  await browser
    .findElement(By.name("txtUsername"))
    .sendKeys("opensourcecms");
  await browser
    .findElement(By.name("txtPassword"))
    .sendKeys("opensourcecms", Key.RETURN);

  let adminText = await browser.findElement(By.xpath("//li")).getText();

  await assert.equal(adminText, "Welcome Admin", "Test gagal dijalankan");
  await fs.writeFile("Report_test.txt", message, "UTF-8", function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("Test berhasil dijalankan");
  });
}

orangehrm();
