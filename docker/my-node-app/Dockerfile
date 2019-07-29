FROM daocloud.io/library/node:8.16.0-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 8081
CMD node index.js