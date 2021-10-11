# Keycloak authentication for Theia

A package to add the authentication with Keycloak in Theia.

## Installation

Add this package in your Theia application:

```
# with npm
npm install theia-keycloak-auth

# with Yarn
yarn add theia-keycloak-auth
```

## Configuration

Configuration is set using environment variables.

This package use the Keycloak
[Node.js adapter](https://www.keycloak.org/docs/latest/securing_apps/#_nodejs_adapter) under the hood
and the following default values are loosely based on the
[Keycloak *Getting Started* guide](https://www.keycloak.org/docs/latest/server_installation/).


| Environment variable       | Description                                                                           | Mandatory | Example                                 |
|----------------------------|---------------------------------------------------------------------------------------|-----------|-----------------------------------------|
| KEYCLOAK_REALM             | The Keycloak realm                                                                    | yes       | demo                                    |
| KEYCLOAK_REALM_PUBLIC_KEY  | The PEM format of the Keycloak realm public key                                       | no        |                                         |
| KEYCLOAK_URL               | The Keycloak URL                                                                      | yes       | http://localhost:8180/auth              |
| KEYCLOAK_HOST              | In a reverse proxy context, override the host of the Keycloak URL                     | no        |                                         |
| KEYCLOAK_PORT              | In a reverse proxy context, override the port of the Keycloak URL                     | no        |                                         |
| KEYCLOAK_SSL_REQUIRED      | Ensures that all communication to and from the Keycloak server is over HTTPS or not   | no        | all, external, none (default: external) |
| KEYCLOAK_CONFIDENTIAL_PORT | The confidential port used by the Keycloak server for secure connections over SSL/TLS | no        | 8443 (default: 8443)                    |
| KEYCLOAK_CLIENT_ID         | The client-id of the application                                                      | yes       | vanilla                                 | 
