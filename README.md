# Revery (Long Term Branch)
Revery is an accessible VR app, intended for high school students, that aims to decrease feelings of stress and anxiety.  
Revery is created by [Revery Technologies](https://revery.now.sh). This branch of the repository uses different files than master, as it's made to be tested on the Viro Media App instead of Xcode


```diff
- CAUTION: 
``` 
***_Please do not change any dependency versions in `package.json`, this includes running `npm audit fix`. Changes may break things on the test bed._***

### Installation prerequisites

- Download [nodejs](https://nodejs.org/en/)
- If on mac install:
  - homebrew - `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  - watchman - `brew install watchman`
- If on windows install:
  - Python 2
  - JDK
- run `npm install -g react-viro-cli react-native-cli ngrok`
- Viro Media App on your phone

## Getting Started

- run `npm install` in the directory
- run `npm run start`
- Open the Viro Media App and tap on the menu icon in the top left and tap on "Enter Testbed".
    - Find the ngrok url that was printed in terminal, or the IP address of the computer and enter it into the app.
- Once the app has loaded on the testbed and you have made changes that you would like to see (make sure to save the file), shake your phone (yes shake), you will see a pop up and click the reload button.
    - You may want to enable Live Reload. This will reload the app automatically whenever you save a file.

## Files

### App.js

  ![Homescreen](/readmeRes/IMG_5392.PNG)

  This is the entry point of the app. This is the screen you see when you first open the app. It contains a menu where you can call a suicide hotline or choose to go into VR. Links to LongTermMode.js and Settings.js currently.

### /js/res

  This is where the 360 background images and any other VR assets go. This includes images/videos displayed in VR, as well as the 360 backgrounds for VR.

### /js/Settings.js

  This is the file for the general settings screen. Links to CallSettings.js and ImageSettings.js.

### /js/CallSettings.js
![Homescreen](/readmeRes/IMG_5393.PNG)

  This is the file for the call settings. The user can either set it to automatically call the National Suicide Prevention Hotline, or add in a phone number to automatically call.

### /js/ImageSettings.js
![Homescreen](/readmeRes/IMG_5394.PNG)

  This is the file for image settings. It is not currently implemented, but will allow users to change the backgrounds in VR to whatever makes them comfortable.

### /js/EmergencyModeVR.js
![Homescreen](/readmeRes/IMG_5395.jpg)

  The Emergency Mode VR environment. It is currently not implemented, but it will have a VR environment where users can do an emergency hotline call when they are feeling unsafe.

### /js/LongTermModeVR.js

![Homescreen](/readmeRes/IMG_5396.PNG)

  The Long Term Mode VR environment. Includes 3 categories of exercises, which can be accessed through a menu.

  ![Homescreen](/readmeRes/IMG_5400.PNG)

  First, awareness, where they can verbally talk about what's bothering them using an audio journal function (unimplemented).

  ![Homescreen](/readmeRes/IMG_5399.PNG)

  Second, wellness, where they can learn about habits that will decrease their levels of stress, such as good sleeping habits.

  ![Homescreen](/readmeRes/IMG_5398.PNG)

  Third, mindfulness, where they can do breathing exercises that will help calm them down in times of stress.
  
 ### other files
 
 All other files are setup files for running the app, and do not correspond to the app's visuals.

## Bugs and Future Expansions
### Bugs
  - There is a settings screen bug where landscape orientation messes up the styling of the screen (will be fixed soon).
  - Doesn't call the right number in emergency mode.
  - When you exit VR, it quits the app instead of returning to the home menu.

## Future Expansions
  - Emergency Mode VR -- need to create a way that users can take a phone call within VR.
  - Image Settings -- need to create a way that users can adjust the background in VR.
  - Awareness in Long Term Mode -- need to figure out how to sense and display audio in vr for the audio journals.
      - Tried to use [react-mic](https://www.npmjs.com/package/react-mic)
  - Wellness in Long Term Mode -- possibly implementing a sleep tracker
