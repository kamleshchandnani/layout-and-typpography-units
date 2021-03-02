# How units behave on different platforms

This projects demonstrates different units on different platform and how do we choose what works for us when working on Web and React Native projects

The whole detailed research and explanation can be found in [this RFC]()

# How to setup
This repo has demo for React as well as React Native. The React code is placed under `packages/react` and React Native is placed under `packages/react-native`

First clone the repo then follow the setup below for running react and react native project

## React Setup
* `cd packages/react`
* Install dependencies using `yarn`
* Run `yarn start`

## React Native Setup
* `cd packages/react`
* Install dependencies using `yarn`
* Run `yarn start` in one terminal - this will start metro bundler
* Run `yarn android` or `yarn ios` in another terminal depending on what platform you want to run the demo
