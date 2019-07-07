# William Kwok's Personal Website

This repo is for my personal website. This is a fork of the IUGA website that I wrote all the code for as of the fork.

# Tech Stack

This site uses the following technologies:

* NextJS - Server Side Rendered React
* Docker - Dockerization of the applications and hosting on UW Informatics Servers
* NGINX - Reverse proxy to handle the SSL certificate verification stuff and forward user connection to the NextJS container
* TypeScript - To make sure types are consistent between reusable components, and for benefitting the tooling by finding problems via static typing.
* Express - Create a custom server for the NextJS Application rather than the default

# How to install

Using currently node version 12.3.0

```
npm install
```

# How to run DEVELOPMENT MODE

On file save, it will refresh the application and start deploying the latest changes.

```
npm run dev
```

# How to build and run a LOCAL PRODUCTION mode application

This is what we do on the IUGA server. Production mode is different from development mode because all the files are static and load faster. It is optimized for production rather than development. This means things like variable names are more obfuscated for compression, etc.

```
npm run build
npm run productionstart
```
