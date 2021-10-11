import { injectable } from "@theia/core/shared/inversify";
import { MemoryStore } from "express-session";
import KeycloakConnect = require("@debovema/keycloak-connect");
import dotenv = require('dotenv');

@injectable()
export class KeycloakService {
    private readonly keycloak: KeycloakConnect.Keycloak;
    private readonly memoryStore: MemoryStore;

    constructor() {
        dotenv.config(); // load environment variables from .env file
        this.memoryStore = new MemoryStore();
        this.keycloak = new KeycloakConnect(
            { store: this.memoryStore },
            {
                "auth-server-url": process.env.KEYCLOAK_URL || "",
                "auth-server-host": process.env.KEYCLOAK_HOST || "",
                "auth-server-port": process.env.KEYCLOAK_PORT || "",
                "ssl-required": process.env.KEYCLOAK_SSL_REQUIRED || "external",
                "confidential-port": process.env.KEYCLOAK_CONFIDENTIAL_PORT || 8443,
                "realm": process.env.KEYCLOAK_REALM || "",
                "realm-public-key": process.env.KEYCLOAK_REALM_PUBLIC_KEY || "",
                "resource": process.env.KEYCLOAK_CLIENT_ID || ""
            });
    }

    public getKeycloakInstance(): KeycloakConnect.Keycloak {
        return this.keycloak;
    }

    public getMemoryStore(): MemoryStore {
        return this.memoryStore;
    }
}
