import { Builder, Browser, By, Key, until } from 'selenium-webdriver';

const login = 'http://36.91.145.99:5800/pmkp/login.php';

async function fillDate(month) {
	const dateForm = [];
	const year = new Date().getFullYear();
	for (let i = 0; i <= 30; i++) {
		let data = 0;
		let bulan = 0;
		if (i < 9) {
			data = '0' + `${i + 1}`;
		} else {
			data = `${i + 1}`;
		}
		if (month < 2) {
			bulan = '0' + `${month}`;
		} else {
			bulan = `${month}`;
		}
		dateForm.push(data + bulan + year);
	}
	return dateForm;
}

async function idenClient(username, password, month, nums, denum, dashboard) {
	let driver = await new Builder().forBrowser(Browser.CHROME).build();
	try {
		await driver.get(login);
		const dateInput = await fillDate(month);
		await driver
			.findElement(By.name('username'))
			.sendKeys(username, Key.TAB, password, Key.ENTER);
		await driver.sleep(1000);
		for (let i = 0; i < nums.length; i++) {
			await driver.get(dashboard);
			await driver
				.findElement(By.name('tgl'))
				.sendKeys(dateInput[i], Key.TAB, nums[i], Key.TAB, denum[i], Key.ENTER);
			await driver.wait(until.alertIsPresent());
			let alert = await driver.switchTo().alert();
			let alertText = await alert.getText();
			await console.log(alertText);
			await alert.accept();
			await driver.sleep(1000);
		}
	} finally {
		await driver.quit();
	}
}

export default idenClient;
