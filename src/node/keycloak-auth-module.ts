import { ContainerModule } from '@theia/core/shared/inversify';
import { BackendApplication } from "@theia/core/lib/node";
import { KeycloakAuthBackendApplication } from "./keycloak-auth-backend-application";
import { KeycloakService } from "./keycloak-service";

export default new ContainerModule((bind, unbind, isBound, rebind) => {
    bind(KeycloakService).toSelf().inSingletonScope();
    rebind(BackendApplication).to(KeycloakAuthBackendApplication).inSingletonScope();
});
