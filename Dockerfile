FROM node:18.16-alpine
WORKDIR /API_TESTE
COPY . .    
RUN npm install
ENTRYPOINT node index
# Utilize as variáveis de ambiente no comando de inicialização
CMD ["sh", "-c", "node idnex.js $NODE_ENV $DB_HOST $DB_PORT $DB_USER $DB_PASSWORD $DB_NAME"]