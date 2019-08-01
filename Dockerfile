# This Dockerfile builds the entire application in its current folder into a docker container
# using node alpine. Then it runs the application through the productionstart command which is 
# defined in the package.json file.
#
# The server runs on port 3000
#
# Last Modified
#       William Kwok
#       June 7, 2019

FROM mhart/alpine-node:12.4

RUN mkdir -p /var/www/app
WORKDIR /var/www/app
COPY ./package.json ./package-lock.json /var/www/app/

RUN apk --virtual .build-deps add \
    python \
    make \
    g++ \
    && apk --virtual .canvas-build-deps add \
    build-base \
    cairo-dev \
    jpeg-dev \
    pango-dev \
    giflib-dev \
    pixman-dev \
    pangomm-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    && apk add \
    pixman \
    cairo \
    pango \
    giflib 


RUN npm install

RUN npm install canvas@next --build-from-source 
# && apk del .build-deps \
# && apk del .canvas-build-deps 

# COPY ./_dev/canvas /var/www/app/node_modules/canvas

COPY . /var/www/app
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "productionstart"]
