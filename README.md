# Revery

Revery is an accessible VR app, intended for high school students, that aims to decrease feelings of stress and anxiety.  
Revery is created by [Revery Technologies](https://revery.now.sh).

### Installation prerequisites

- Download [nodejs](https://nodejs.org/en/)
- If on mac install:
  - homebrew - `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  - watchman - `brew install watchman`
  - Have Xcode installed
- If on windows install:
  - Python 2
  - JDK
  - Android studio
- run `npm install -g react-viro-cli react-native-cli ngrok`
- ~~Viro Media App on your phone~~
  - Due to our use of native modules, development of the app within the Viro testbed is no longer supported.

## Getting Started

- For mac
  - run `npm install`
  - In the `ios` directory, run `pod install`.
  - There are two ways you can run the application:
    - open `ios/revery.xcworkspace`
      - Xcode will open - press the play button in the top bar, the device simulator will start
        - You can refresh the app in the simulator by pressing `command` & `r`
        - To test VR, its best to connect your iPhone to your mac and choose it as your device
          - Needed to utilize the phone's gyroscope
    - run `react-native run-ios`
- For windows
  - ...

## Oversimplified Project Structure

- App.js
  - This is the entry point of the app. This is the screen you see when you first open the app.
- /Assets/
  - This is were all non-VR assets are located, such as icons and branding
- /js/res
  - This is where the 360 background images and any other VR assets will go.
- js/Settings.js
  - This is the settings screen.
- /js/EmergencyModeVR.js
  - The Emergency Mode VR environment.
- /js/LongTermModeVR.js
  - The Long Term Mode VR environment.

Please do not change any dependency versions in `package.json`, this includes running `npm audit fix`. Changes may break things on the test bed.
