FROM node:13

WORKDIR /app

COPY . .

RUN npm ci && \
    npm run build

CMD ["node", "."]