FROM node:22-alpine
WORKDIR /app
COPY package.json app.js ./
RUN npm install --omit=dev
EXPOSE 3000
CMD ["node", "app.js"]
