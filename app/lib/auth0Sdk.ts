import { ManagementClient } from "auth0";

export const getAuth0Client = () => {
  let client: ManagementClient | null = null;

  // The base URI includes the protocol (https://) which causes an error on the management
  // SDK. This removes any protocol and gives back the domain by itself to give to the SDK.
  const domain = process.env["AUTH0_ISSUER_BASE_URL"]!.replace(
    /(^\w+:|^)\/\//,
    ""
  );

  if (!client) {
    client = new ManagementClient({
      domain: domain,
      clientId: process.env["AUTH0_CLIENT_ID"],
      clientSecret: process.env["AUTH0_CLIENT_SECRET"],
      scope:
        "read:users update:users read:roles read:role_members read:organization_members read:organization_member_roles read:stats read:insights",
    });
  }

  return client;
};
