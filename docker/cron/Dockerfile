FROM kkarczmarczyk/node-yarn:8.0-wheezy

RUN apt-get install -y cron
RUN git clone https://github.com/cronosdeveloper/cronos-explorer.git
WORKDIR /workspace/cronos-explorer
RUN yarn install
RUN npm install n -g
RUN n stable

WORKDIR /
COPY crontab /etc/cron.d/sync-cron
RUN chmod +x /etc/cron.d/sync-cron 
RUN crontab /etc/cron.d/sync-cron

COPY entrypoint.sh entrypoint.sh 

ENTRYPOINT ["bash", "entrypoint.sh"]
