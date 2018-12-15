FROM kkarczmarczyk/node-yarn:8.0-wheezy

RUN git clone https://github.com/cronosdeveloper/cronos-explorer.git
WORKDIR /workspace/cronos-explorer
RUN yarn install
RUN yarn run build:web
