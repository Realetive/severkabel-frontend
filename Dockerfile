# docker build -t severkabel . && \
# say 'Сборка завершена' && \
# rm $HOME/_dev/severkabel/docker.tar
# docker save severkabel > $HOME/_dev/severkabel/docker.tar && \
# say 'Импорт завершен' && \
# ssh root@new.severkabel.ru  'mkdir -p /root/severkabel/.bin/' && \
# scp -r $HOME/_dev/severkabel/site/.bin \
#     root@new.severkabel.ru:/root/severkabel && \
# ssh root@new.severkabel.ru  'chmod -R +x /root/severkabel/.bin/' && \
# say 'Копирование исполняемых файлов завершено' && \
# scp $HOME/_dev/severkabel/docker.tar \
#     root@new.severkabel.ru:/root/severkabel/docker.tar && \
# say 'Загрузка завершена' && \
# ssh root@new.severkabel.ru 'sh /root/severkabel/.bin/start.sh' && \
# say 'Развёртывание завершено'

# du -h --max-depth=1 /
# sudo apt-get autoremove

FROM node:10-alpine

RUN apk update && \
    apk upgrade && \
    apk add --no-cache bash git openssh && \
    mkdir -p /home/node/app/node_modules && \
    chown -R node:node /home/node/app

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

WORKDIR /home/node/app

USER node

COPY --chown=node:node . .

RUN npm install -g pm2
RUN npm install --ignore-scripts

EXPOSE 3012

CMD [ "node" ]
