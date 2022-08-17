describe('Login flow', () => {

  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should login fail', async () => {
    await device.reloadReactNative();
    await element(by.id('loginScreenButton')).tap();
    await element(by.id('emailText')).typeText('test@test.com');
    await element(by.id('passwordText')).typeText('12345678');
    await element(by.id('loginButton')).tap();

    await expect(element(by.text('Dashboard'))).toNotExist();

  });

  it('should login successfully', async () => {
    await device.reloadReactNative();
    await element(by.id('loginScreenButton')).tap();
    await element(by.id('emailText')).typeText('test@test.com');
    await element(by.id('passwordText')).typeText('1234567890');
    await element(by.id('loginButton')).tap();

    await expect(element(by.text('Dashboard'))).toBeVisible();
    await element(by.text('My Bookings')).tap();
    await element(by.text('Profile')).tap();
    await element(by.text('Home')).tap();
    // await element(by.text('BOOK NOW'))[0].tap();

  });

  it('should logoutButton successfully', async () => {
    await device.reloadReactNative();
    await element(by.id('logoutButton')).tap();

  });


  
 
});