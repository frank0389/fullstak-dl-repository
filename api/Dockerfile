FROM node:18.18.2-slim
COPY . /node-app
WORKDIR /node-app

RUN npm ci --only=prod

ARG port=8080

ENV PORT=${port} 

EXPOSE ${port}

HEALTHCHECK --interval=10s --timeout=2s --start-period=15s CMD node healthcheck.js 

CMD ["node", "src/index.js"]
