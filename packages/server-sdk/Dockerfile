FROM node:13

EXPOSE 3000
WORKDIR /app

COPY . .

RUN npm ci && \
    npm run build

CMD ["node", "."]