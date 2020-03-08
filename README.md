# Sonores Project &middot; ![GitHub stars](https://img.shields.io/github/stars/manaswinidas/Sonores-project) ![GitHub contributors](https://img.shields.io/github/contributors/manaswinidas/Sonores-project) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) ![License](https://img.shields.io/github/license/manaswinidas/Sonores-project)
<!--- These are examples. See https://shields.io for others or to customize this set of shields. You might want to include dependencies, project status and licence info here --->
![GitHub repo size](https://img.shields.io/github/repo-size/manaswinidas/Sonores-project)
![](https://img.shields.io/github/downloads/manaswinidas/Sonores-project/total)
![](https://img.shields.io/github/issues/manaswinidas/Sonores-project?color=green)
![](https://img.shields.io/github/issues-pr/manaswinidas/Sonores-project?color=green)
![](https://img.shields.io/github/last-commit/manaswinidas/Sonores-project)

A Google Chrome extension that aims to make the internet transcend language barriers.

Internet pre-dominantly being in English makes non-English users dependent on others for important activities including filling out important forms. What this extension aims to do is translate the labels to native language and allow the user to provide input using a speech-to-text such that the user gets a preview in native language while the value in the form-data is in English.

## Prerequisites

Before you begin, ensure you have met the following requirements:
<!--- These are just example requirements. Add, duplicate or remove as required --->
* Google Chrome `v80.0.0+`
* Node.JS (to run the mock website)

## Installing Sonores

To install Sonores, follow these steps:

1. Clone this project
  ```
  git clone https://github.com/manaswinidas/Sonores-project.git
  ```
2. Open Google Chrome.
3. Navigate to [chrome://extensions/](chrome://extensions/).
4. Enable developer mode in the top right corner.
5. Click on `Load Unpacked` from the developer mode options.
6. Open `Sonores-project/src`.

## Using Sonores

Load the Sonores extension to your Google Chrome from instructions in `Installing Sonores`.

### Using on the mock website

Currently the extension works properly with the mock website that uses Bootstrap form.

```
cd mock_web/
npm install # to install the dependencies
npm start # to run the server
```

To see the mock web, you can now navigate to [http://localhost:8080/](http://localhost:8080/).

Click on the icon of the extension on top right corner. You are given two options:

1. To translate the labels.
2. To get the audio output of the labels.

## Authors

The extension was built originally by team PMRY for [RevHack Hackathon](https://www.digit.in/news/general/reverie-hosts-revhack-a-hackathon-for-developing-indic-language-technologies-in-bengaluru-52391.html) conducted by [Reverie Language Technologies](https://reverieinc.com/).

Members of team PMRY :

* [Manaswini Das](https://github.com/manaswinidas)
* [Pooja Agarwal](https://github.com/agarwalpooja)
* [Ramakrishna Pattnaik](https://github.com/rkpattnaik780)
* [Yati Padia](https://github.com/yati1998)

## License
<!--- If you're not sure which open license to use see https://choosealicense.com/--->

This project uses the following license : [MIT](./LICENSE.md).