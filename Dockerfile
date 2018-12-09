FROM node:9
WORKDIR /app
COPY index.js /app/index.js
COPY templates /app/templates
COPY package.json /app/package.json
RUN yarn
CMD [ "yarn","start"]