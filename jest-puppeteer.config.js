module.exports = {
    launch: {
        headless: global.HEADLESS,
        slowMo: global.SLOWMO,
        dumpio: true,
        args: ['--disable-infobars', '--disk-cache-size=0', '--start-maximized'],
        defaultViewport: {width: 1400, height: 800}
    },
    browserContext: 'default'
};
