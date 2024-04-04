FROM node:18.18.2-slim
COPY . /node-app
WORKDIR /node-app

RUN npm ci --only=prod

ARG port=8080

ENV PORT=${port} \
  APP_NAME=${app_name} 

EXPOSE ${port}

CMD ["node", "src/index.js"]
