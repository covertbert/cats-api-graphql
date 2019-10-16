FROM node:10-alpine
RUN apk add --no-cache bash
WORKDIR /app
COPY . ./
RUN npm install
RUN chmod +x ./ops/start.sh
EXPOSE 4000
ENTRYPOINT ["sh", "./ops/start.sh"]
