FROM node:20
 
WORKDIR /app

COPY . /app

RUN npm install

EXPOSE  3000

CMD [ "npm", "run", "start", "--", "--host", "0.0.0.0" ]