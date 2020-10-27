# Simple Boarding Gate

> A simple DNS server.

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
