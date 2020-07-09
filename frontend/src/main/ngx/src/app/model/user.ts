export interface UserResponse {
  authorities: [
    {
      authority: string;
    }
  ];
  details: {
    remoteAddress: string;
    sessionId: string;
    scheme: string;
    host: string;
    port: number;
    contextPath: string;
  };
  authenticated: boolean;
  principal: {
    otherData: {
      SURNAME: string;
      PICTURE: string;
      EMAIL: string;
      NAME: string;
    };
    username: string;
    authorities: [
      {
        authority: string;
      }
    ];
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    enabled: boolean;
    clientPermissions: {};
    login: string;
  };
  credentials: any;
  name: string;
}
