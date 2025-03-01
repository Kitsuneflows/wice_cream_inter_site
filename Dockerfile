FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Utilisez une version compatible de npm
RUN npm install -g npm@10.8.2 && \
    npm cache clean --force && \
    npm install --registry=https://registry.npmmirror.com

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
