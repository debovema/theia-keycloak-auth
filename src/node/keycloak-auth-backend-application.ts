import { BackendApplication } from "@theia/core/lib/node/backend-application";
import { inject, injectable } from "@theia/core/shared/inversify";
import { KeycloakService } from "./keycloak-service";
import * as session from "express-session";

@injectable()
export class KeycloakAuthBackendApplication extends BackendApplication {
    @inject(KeycloakService) private keycloak: KeycloakService;

    protected async configure(): Promise<void> {
        let kc = this.keycloak.getKeycloakInstance();
        this.app.use(session({
            secret:'thisShouldBeLongAndSecret', // TODO: retrieve from process.env
            resave: false,
            saveUninitialized: true,
            store: this.keycloak.getMemoryStore()
        }));
        let keycloakMiddleware = kc.middleware();
        keycloakMiddleware.push(kc.protect());
        this.app.use(keycloakMiddleware);

        return super.configure();
    }
}
