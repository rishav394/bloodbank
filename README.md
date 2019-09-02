<div align="center"></a>
  <img src="https://image.flaticon.com/icons/png/128/2069/2069743.png"></a>
  <h2>Blood Bank</h2>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![Build Status](https://travis-ci.com/rishav394/bloodbank.svg?token=nxairHVBeKGrCQKnMdVR&branch=master)](https://travis-ci.com/rishav394/bloodbank)
![GitHub package.json version](https://img.shields.io/github/package-json/v/rishav394/bloodbank)
![GitHub](https://img.shields.io/github/license/rishav394/bloodbank)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/rishav394/bloodbank)
![GitHub repo size](https://img.shields.io/github/repo-size/rishav394/bloodbank)
![GitHub language count](https://img.shields.io/github/languages/count/rishav394/bloodbank)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

This is a simple Blood Bank Web Application I made for my assigment. Uses Node JS and MongoDB primarily.

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Testing](#tests)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a id="about"></a>

Blood Bank is a very simple yet functional and secure Blood Bank Web Application.

If you are familiar enough in a beginner level with `Node JS` and `mongoose` this is a good project to clone and try to replicate.

## 🏁 Getting Started <a id="getting-started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

- Node > 8
- Git
- MongoDB > 3.0

### Installing

Clone the repo and install the dependencies.

```bash
git clone https://github.com/rishav394/bloodbank.git
cd bloodbank-master
```

```bash
npm install
```

### Running Locally

Create a new file in root directory `.env`
Copy contents from `.env.expmple`
Make changes if required.

```bash
npm start
```

### Populating database with sample data

Edit JSON files under `util` for dummy data

```bash
npm run populate
```

## 🔧 Running the tests <a id="tests"></a>

Still in todos

## 🚀 Deployment <a id="deployment"></a>

Make changes in `.env`

1. Set `DBURI` to your remote mongoDB URI
2. Scale the PORT accounrding to your host/server
3. Change NODE_ENV to production for `Morgan`
4. Remove everything after `DEBUG=`

## ⛏️ Built Using <a id="built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - MongoDB Wrapper
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [VS Code](https://code.visualstudio.com/) - Aesme IDE

## ✍️ Authors <a id="authors"></a>

[@rishav394](https://github.com/rishav394) - Initial work

See also the list of [contributors](https://github.com/rishav394/bloodbank/graphs/contributors) who participated in this project.

## 🎉 Acknowledgements <a id="acknowledgement"></a>

- Hat tip to anyone whose code was used
- StackOverflow <3
