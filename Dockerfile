FROM node:20.18.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGO_URI="mongodb+srv://yash29082002:qHo1FhgN0kF5umAN@cms-backend.ytvuf.mongodb.net/?retryWrites=true&w=majority&appName=cms-backende"
ENV PORT=5000

EXPOSE 5000

CMD ["node", "server.js"]
