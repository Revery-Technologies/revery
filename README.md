# The Embrace

### Installation prerequisites

- Download [nodejs](https://nodejs.org/en/)
- If on mac install:
  - homebrew - `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  - watchman - `brew install watchman`
- If on windows (probably?) install:
  - Python 2
  - JDK
- run `npm install -g react-viro-cli react-native-cli ngrok`
- Viro Media App on your phone

## Getting Started

- run `npm install` in the directory
- run `npm start`
- Open the Viro Media App and tap on the menu icon in the top left and tap on "Enter Testbed".
  Find the ngrok url that was printed in terminal and enter it into the app.

## Oversimplified Project Structure

- App.js
  - This is the entry point of the app. This is the screen you see when you first open the app.
- /js/res
  - This is where the 360 background images and any other VR assets will go.
- /js/EmergencyModeVR.js
  - The Emergency Mode VR environment.
- /js/LongTermModeVR.js
  - The Long Term Mode VR environment.