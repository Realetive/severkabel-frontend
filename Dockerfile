# docker build -t severkabel . && \
# say 'Сборка завершена' && \
# rm $HOME/_dev/severkabel/docker.tar
# docker save severkabel > $HOME/_dev/severkabel/docker.tar && \
# say 'Импорт завершен' && \
# scp -i $HOME/_dev/nevatrip/_security/deploy_rsa \
#        $HOME/_dev/severkabel/docker.tar \
#        deploy@new.severkabel.ru:/root/severkabel/docker.tar && \
# say 'Загрузка завершена' && \
# ssh -i $HOME/_dev/nevatrip/_security/deploy_rsa deploy@new.severkabel.ru 'sh ./severkabel/.bin/start.sh' && \
# say 'Развёртывание завершено'

FROM node:10-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

RUN mkdir -p /home/node/app/node_modules && \
    chown -R node:node /home/node/app

WORKDIR /home/node/app

USER node

COPY --chown=node:node . .

RUN npm install

EXPOSE 3012

CMD [ "npm", "start" ]
