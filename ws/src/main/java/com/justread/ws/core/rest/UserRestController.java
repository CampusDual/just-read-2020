package com.justread.ws.core.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.justread.api.core.service.IUserService;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.server.rest.ORestController;

import java.security.Principal;


@RestController
@RequestMapping("/users")
@ComponentScan(basePackageClasses = {com.justread.api.core.service.IUserService.class})
public class UserRestController extends ORestController<IUserService> {

    @Autowired
    private IUserService userSrv;

    @Override
    public IUserService getService() {
        return this.userSrv;
    }

    @RequestMapping(
            value = "/login",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<EntityResult> login() {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/username", method = RequestMethod.GET)
    @ResponseBody
    public Principal currentUser(Principal principal) {
        return principal;
    }
}
