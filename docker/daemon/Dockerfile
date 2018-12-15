# coin builder
FROM ubuntu:16.04 as builder
WORKDIR /

RUN apt-get update
RUN apt install -y software-properties-common
RUN apt-add-repository -y ppa:bitcoin/bitcoin
RUN apt-get update
RUN apt-get install -y -o Dpkg::Options::="--force-confdef" -o Dpkg::Options::="--force-confold" make software-properties-common \
    build-essential libtool autoconf libssl-dev libboost-dev libboost-chrono-dev libboost-filesystem-dev libboost-program-options-dev \
    libboost-system-dev libboost-test-dev libboost-thread-dev sudo automake git wget pwgen curl libdb4.8-dev bsdmainutils libdb4.8++-dev \
    libminiupnpc-dev libgmp3-dev ufw pkg-config libevent-dev libdb5.3++ unzip 

FROM ubuntu:16.04
LABEL description="Dockerized Cronos daemon"

COPY --from=builder /usr/lib/x86_64-linux-gnu/libboost_filesystem.so.1.58.0 /usr/lib/x86_64-linux-gnu/libboost_filesystem.so.1.58.0
COPY --from=builder /usr/lib/x86_64-linux-gnu/libboost_program_options.so.1.58.0 /usr/lib/x86_64-linux-gnu/libboost_program_options.so.1.58.0
COPY --from=builder /usr/lib/x86_64-linux-gnu/libboost_system.so.1.58.0 /usr/lib/x86_64-linux-gnu/libboost_system.so.1.58.0
COPY --from=builder /usr/lib/x86_64-linux-gnu/libboost_thread.so.1.58.0 /usr/lib/x86_64-linux-gnu/libboost_thread.so.1.58.0
COPY --from=builder /usr/lib/x86_64-linux-gnu/libboost_chrono.so.1.58.0 /usr/lib/x86_64-linux-gnu/libboost_chrono.so.1.58.0
COPY --from=builder /usr/lib/x86_64-linux-gnu/libgmp.so.10 /usr/lib/x86_64-linux-gnu/libgmp.so.10
COPY --from=builder /usr/lib/x86_64-linux-gnu/libminiupnpc.so.10 /usr/lib/x86_64-linux-gnu/libminiupnpc.so.10
COPY --from=builder /usr/lib/libdb_cxx-4.8.so /usr/lib/libdb_cxx-4.8.so
COPY --from=builder /usr/lib/x86_64-linux-gnu/libevent_pthreads-2.0.so.5 /usr/lib/x86_64-linux-gnu/libevent_pthreads-2.0.so.5
COPY --from=builder /usr/lib/x86_64-linux-gnu/libevent-2.0.so.5 /usr/lib/x86_64-linux-gnu/libevent-2.0.so.5
COPY --from=builder /lib/x86_64-linux-gnu/libcrypto.so.1.0.0 /lib/x86_64-linux-gnu/libcrypto.so.1.0.0
COPY --from=builder /usr/lib/x86_64-linux-gnu/libevent_core-2.0.so.5 /usr/lib/x86_64-linux-gnu/libevent_core-2.0.so.5
COPY --from=builder /lib/x86_64-linux-gnu/libssl.so.1.0.0 /lib/x86_64-linux-gnu/libssl.so.1.0.0

COPY entrypoint.sh /
COPY cronosd /
COPY cronos-cli /
RUN mkdir -p /root/.cronos/
COPY cronos.conf /root/.cronos/

ENTRYPOINT ["bash", "entrypoint.sh"]