FROM node:17.1-stretch-slim

WORKDIR /blog
RUN mkdir -p src posts downloads

COPY . .

RUN npm i

EXPOSE 3000
CMD ["npm","start"]