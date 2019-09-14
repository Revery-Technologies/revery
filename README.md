# Revery
Revery is an accessible VR app, intended for high school students, that aims to decrease feelings of stress and anxiety.  
Revery is created by [Revery Technologies](https://revery.now.sh).
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
- run `npm run start`
- Open the Viro Media App and tap on the menu icon in the top left and tap on "Enter Testbed".
    - Find the ngrok url that was printed in terminal and enter it into the app.
- Once the app has loaded on the testbed and you have made changes that you would like to see (make sure to save the file), shake your phone (yes shake), you will see a pop up and click the reload button.
    - You may want to enable Live Reload. This will reload the app automatically whenever you save a file.

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
