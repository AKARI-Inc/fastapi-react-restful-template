FROM python:3.9-slim AS dev
USER root

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get autoremove -y && \
    apt-get install -y software-properties-common && \
    add-apt-repository ppa:git-core/ppa -y && \
    apt-get -y install git \
    build-essential \
    libmariadb-dev \
    locales && \
    localedef -f UTF-8 -i ja_JP ja_JP.UTF-8

ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8
ENV TZ JST-9
ENV TERM xterm

RUN mkdir -p /root/api
COPY requirements.txt /root/api
WORKDIR /root/api

RUN pip install --upgrade pip
RUN pip install --upgrade setuptools
# RUN pip install git+https://github.com/AKARI-Inc/jcon.git
RUN pip install -r requirements.txt
