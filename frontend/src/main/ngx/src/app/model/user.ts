export interface UserPrincipalResponse {
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

export interface User {
  code: number;
  message: string;
  data: [
    {
      SURNAME: string;
      EMAIL: string;
      PICTURE: string;
      NAME: string;
      USER_: string;
    }
  ];
  sqlTypes: {
    PICTURE: number;
    name: number;
    USER_: number;
    EMAIL: number;
    picture: number;
    surname: number;
    email: number;
    SURNAME: number;
    user_: number;
    NAME: number;
  };
}
