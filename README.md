# SETTING UP


## Install the necessary dependencies

1. Install **Appium** : `npm install -g appium` or  `sudo npm install --unsafe-per=true -g appium`
2. Install **WebDriverIO**, an open-source testing utility for NodeJS that supports Appium. : `npm install --save webdriverio @wdio/cli`
3. Install **ChaiJS** to support assertion statements : `npm install --save chai`

## Configure **WebDriverIO**

**Note**: The web driver config file needs to be generated to apply the configuration while testing. Run the command below inside the project: 
<br/>

`npx wdio config`

