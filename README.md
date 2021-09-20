# Automated Mobile Testing with Appium and JEST


## Install the necessary dependencies

1. Install **Appium** : `npm install -g appium` or  `sudo npm install --unsafe-per=true -g appium`
<!-- 2. Install **WebDriverIO**, an open-source testing utility for NodeJS that supports Appium. : `npm install --save webdriverio @wdio/cli`
3. Install **ChaiJS** to support assertion statements : `npm install --save chai` --> -->
2. Install these dependencies: `npm i -D webdriverio babel-plugin-jsx-remove-data-test-id concurrently`
3. Install **appium-doctor**:  `sudo npm install appium-doctor -g`
**Note**
<br/>
 `WebdriverIO` will work as our <i>client<i/> for the appium server in the case of JS. More to come on how to use other clients such as python.
<br/>
`babel-plugin-jsx-remove-data-test-id` will help us remove unwanted accessibilityLabels from our app, since that’s the preferred way of targeting elements for both IOS and Android platforms
<br/>
`concurrently` will help us automate the running of appium and jest to do our e2e tests
<br/>
`Appium-doctor` will help us identify if we have all of the needed dependencies to correctly run appium in an emulator

## Appium-Doctor

To run the Appium Doctor based on the host OS we want to test in, simply execute:
<br/> 
<h3> For Android <h3/>
<br/>

`appium-doctor --android`

<br/>
<h3> For iOS <h3/>

`appium-doctor --ios`
<!-- ## Configure **WebDriverIO**

**Note**: The web driver config file needs to be generated to apply the configuration while testing. Run the command below inside the project: 
<br/>

`npx wdio config` -->


## Remember:
1. Your JAVA_HOME and ANDROID_HOME must be exported properly
2. You should run the app on the emulator you specified to the test script


## RUNNING THE TEST

1. Run the project `npm run android` or `npm run ios`
2. Execute the script `npm run rntest`




