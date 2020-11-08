<h1 align="center">MERNjs</h1>	

<p align="center">an open-source full-stack JavaScript solution</p>	

<p align="center">
  <a href="https://mern.js.org/" target="_blank">
    <img src="https://raw.githubusercontent.com/IamMohaiminul/MERNjs/master/public/images/logo.png" width="128" alt="MERNjs Logo" />
  </a>
</p>

<p align="center">
  <strong>MERNjs</strong> is an open-source full-stack JavaScript solution, which provides a solid starting point for <a href="http://www.mongodb.org/" target="_blank">MongoDB</a>, <a href="http://expressjs.com/" target="_blank">Express</a>, <a href="https://reactjs.org/" target="_blank">React</a> and <a href="http://www.nodejs.org/" target="_blank">Node.js</a> based applications. The idea is to solve the common issues with connecting those frameworks, build a robust framework to support daily development needs, and help developers use better practices while working with popular JavaScript components.
</p>

## Before You Begin

Before we begin, recommend to read about the basic building blocks that assemble a MERNjs application:

- MongoDB - Go through [MongoDB Official Website](http://mongodb.org/) and proceed to their [Official Manual](http://docs.mongodb.org/manual/), which should help you understand NoSQL and MongoDB better.
- Express - The best way to understand express is through its [Official Website](http://expressjs.com/), which has a [Getting Started](http://expressjs.com/starter/installing.html) guide, as well as an [ExpressJS](http://expressjs.com/en/guide/routing.html) guide for general express topics.
- ReactJS - React's [Official Website](http//facebook.github.io/react/) is a great starting point.
- Node.js - Start by going through [Node.js Official Website](http://nodejs.org/) which should get you going with the Node.js platform in no time.

## Prerequisites

Make sure we have installed all of the following prerequisites on our development machine:

- Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
- MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).

## Getting Started

#### Install the dependencies:

```
$ npm install
```

#### Build the application:

```
$ npm run build
```

#### Run the application:

```
$ npm run start
$ npm run start:debug
$ npm run start:dev
$ npm run start:dev:client
$ npm run start:dev:server
```

#### Run the Linter and Prettier:

```
$ npm run lint
$ npm run format
```

_Note: Set the environment variables in `.env` file and make sure the **MongoDB** server is running._

#### Setup git hooks for commit (`.git/hooks/pre-commit`):

```
#!/bin/sh

npm run lint
npm run format
npm run build
```
