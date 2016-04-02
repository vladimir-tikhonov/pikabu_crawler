FROM ubuntu:trusty

ENV APP_ROOT="/opt/pikabu_crawler"

RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT

RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys F5DA5F09C3173AA6 && \
    echo "deb http://ppa.launchpad.net/brightbox/ruby-ng/ubuntu trusty main" >> /etc/apt/sources.list

RUN apt-get update && \
    apt-get install -y openssl ca-certificates --no-install-recommends && \
    apt-get install -y build-essential zlib1g-dev && \
    apt-get install -y ruby2.3 ruby2.3-dev ruby-switch --no-install-recommends && \
    rm -rf /var/cache/apt/*

RUN ruby-switch --set ruby2.3 && \
    gem install bundler
