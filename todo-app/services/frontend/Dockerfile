FROM node:18-bookworm-slim

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
  
WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN CI=true npm run test

RUN npm ci 
  
USER node

CMD ["dumb-init", "npm", "run", "start"]
