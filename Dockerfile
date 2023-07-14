FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=dev

# Bundle app source
COPY . .
ENV PORT 3000
ENV HOST 0.0.0.0
EXPOSE 3000
CMD [ "node", "bin/www.js" ]
