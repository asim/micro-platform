FROM golang:1.13-alpine as builder
RUN apk --no-cache add make git gcc libtool musl-dev upx
WORKDIR /
COPY . /
RUN make build

FROM alpine:latest
RUN apk add ca-certificates && \
    rm -rf /var/cache/apk/* /tmp/* && \
    [ ! -e /etc/nsswitch.conf ] && echo 'hosts: files dns' > /etc/nsswitch.conf

WORKDIR /
COPY . /
# Specify list of things to copy from builder
COPY --from=builder web/web /web/web
COPY --from=builder api/api /api/api
COPY --from=builder platform /platform
COPY entrypoint.sh /
RUN chmod 755 entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]
