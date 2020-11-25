# Simple Boarding Gate

> A simple DNS server.

## Install on my ABT Node

[![Install on my ABT Node](https://raw.githubusercontent.com/blocklet/development-guide/main/assets/install_on_abtnode.svg)](https://install.arcblock.io/?action=blocklet-install&meta_url=https%3A%2F%2Fgithub.com%2Fblocklet%2Fip-echo-dns%2Freleases%2Fdownload%2F1.4.2%2Fblocklet.json)

## Getting started

### Configuration

Put following contents in `.env`:

```ini
SKIP_PREFLIGHT_CHECK=true

# server side
BLOCKLET_PORT="3030"

REACT_APP_BASE_URL="http://192.168.1.2:3030"
REACT_APP_APP_NAME="IP Echo DNS"
REACT_APP_API_PREFIX=""
```

### Start hacking

```shell
npm run start:server
npm run start:client
```

### Deploy to local ABT Node

```shell
abtnode deploy .
```
