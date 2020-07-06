require('dotenv').config()

module.exports = {
    concurrency: 10,
    apiKey: process.env.CHALLENGE_API_KEY,
    //
    browser: [
        // Laptop
        {width: 1200, height: 700, name: 'chrome'},
        {width: 1200, height: 700, name: 'firefox'},
        {width: 1200, height: 700, name: 'edgechromium'},
        // Tablet
        {width: 768, height: 700, name: 'chrome'},
        {width: 768, height: 700, name: 'firefox'},
        {width: 768, height: 700, name: 'edgechromium'},
        // Add mobile emulation devices in Portrait mode
        {deviceName: 'iPhone X', screenOrientation: 'portrait'}
    ],
    // set batch name to the configuration
    batchName: 'UFG Hackathon'
}