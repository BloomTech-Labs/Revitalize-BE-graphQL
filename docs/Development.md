# **Configure Development Environment**

## **Prerequisites**:

- Node [Install](https://nodejs.org/en/download/c)
- Docker [Windows](https://docs.docker.com/docker-for-windows/install/) [Mac](https://docs.docker.com/docker-for-mac/install/) [Linux](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
- Prisma `yarn add global prisma` or `npm i -g prisma`

## 1️⃣ **Getting started** 👋

To get the server running locally:

- **Clone** this repo
- **yarn** to install all required dependencies
- **yarn dev** to start the local server

## 2️⃣ **Environment Variables** 🌍

In order for the app to function correctly, you must configure the environment variables below

Head over to the config file, and make copy of the a `.env.example` file, and rename it to `dev.env`, this file includes the following variables:

- _`PORT`_: GraphQL Yoga server port, default 4000
- _`PRISMA_ENDPOINT`_: Endpoint to access prisma graphical instance
- _`PRISMA_SECRET`_: Secures the prisma graphical instance with a secret, requiring a valid authorization token when accessing the instance
- _`GOOGLE_CLIENT_ID`_ - Generated from Google's Developer console, generate yours [here](https://console.developers.google.com).
- _`GOOGLE_CLIENT_SECRET`_ - Generated from Google's Developer console, generate yours [here](https://console.developers.google.com).
- _`FACEBOOK_APP_ID`_ - Generated from Facebook Developer Tools, generate yours [here](https://developers.facebook.com/)
- _`FACEBOOK_APP_SECRET`_ - Generated from Facebook Developer Tools, generate yours [here](https://developers.facebook.com/)
- _`TWITTER_API_KEY`_ - Generated from Twitter Developers, generate yours [here](https://developer.twitter.com/)
- _`TWITTER_API_SECRET`_ - Generated from Twitter Developers, generate yours [here](https://developer.twitter.com/)

## 3️⃣ **Prisma** 💻

Utilizing [Prisma ORM](https://www.prisma.io/) we can seamlessly interface with our database.

To get setup make sure you've installed prisma globally.

- `yarn add global prisma` or `npm i -g prisma`

Once done make sure you're in the root folder of the cloned repo and run the following commands.

- `cd ./prisma`
- `docker-compose up -d`
- `prisma deploy -e ../config/dev.env`

## 4️⃣ **Done** 🎉
