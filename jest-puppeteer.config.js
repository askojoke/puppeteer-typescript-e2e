module.exports = {
    launch: {
        headless: false,
        slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,
        dumpio: true,
        args: ['--disable-infobars', '--disk-cache-size=0', '--start-maximized'],
        defaultViewport: {width: 1400, height: 800}
    },
    browserContext: 'default'
};
