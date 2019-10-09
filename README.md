# Revery
Revery is an accessible VR app, intended for high school students, that aims to decrease feelings of stress and anxiety.  
Revery is created by [Revery Technologies](https://revery.now.sh).
### Installation prerequisites

- Download [nodejs](https://nodejs.org/en/)
- If on mac install:
  - homebrew - `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  - watchman - `brew install watchman`
  - Have xcode installed
- If on windows (probably?) install:
  - Python 2
  - JDK
  - Android studio
- run `npm install -g react-viro-cli react-native-cli ngrok`
- ~~Viro Media App on your phone~~
    - Due to our use of native modules, development of the app within the Viro testbed is no longer supported.

## Getting Started

- For mac 
    - run `npm install`
    - then `cd ios && pod install && open revery.xcworkspace/`
        - Xcode will open - press the play button in the top bar
- For windows
    - ...

## Oversimplified Project Structure

- App.js
  - This is the entry point of the app. This is the screen you see when you first open the app.
- /js/res
  - This is where the 360 background images and any other VR assets will go.
- Settings.js
  - This is, contrary to popular belief, the settings screen.
- /js/EmergencyModeVR.js
  - The Emergency Mode VR environment.
- /js/LongTermModeVR.js
  - The Long Term Mode VR environment.

Please do not change any dependency versions in `package.json`, this includes running `npm audit fix`. Changes may break things on the test bed.
