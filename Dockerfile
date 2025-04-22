FROM node:18.16-alpine
WORKDIR /API_TESTE
COPY . .    
RUN npm install --save
ENTRYPOINT node index
