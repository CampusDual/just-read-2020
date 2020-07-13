package com.justread.ws.core.rest;

import com.justread.api.core.service.IListService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("lists")
@ComponentScan(basePackageClasses = {com.justread.api.core.service.IListService.class})
public class ListRestController extends ORestController<IListService> {

    @Autowired
    private IListService listService;

    @Override
    public IListService getService() {
        return this.listService;
    }
}
