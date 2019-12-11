const { Builder, By, Key } = require("selenium-webdriver");

async function logincrm() {
  let browser = await new Builder().forBrowser("chrome").build();

  await browser.get(
    "https://demo.1crmcloud.com/login.php"
  );

  await browser
    .findElement(By.name("user_name"))
    .sendKeys("admin");
  await browser
    .findElement(By.name("user_password"))
    .sendKeys("admin", Key.RETURN);

  await browser.get(
    "https://demo.1crmcloud.com/index.php"
  );

  await browser.findElement(By.className("meta-profile")).click();
}

logincrm();
