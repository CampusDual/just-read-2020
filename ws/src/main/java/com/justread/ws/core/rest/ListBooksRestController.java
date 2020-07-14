package com.justread.ws.core.rest;

import com.justread.api.core.service.IListBooksService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("listbooks")
@ComponentScan(basePackageClasses = {com.justread.api.core.service.IListBooksService.class})
public class ListBooksRestController extends ORestController<IListBooksService> {

    @Autowired
    private IListBooksService listBooksService;

    @Override
    public IListBooksService getService() {
        return this.listBooksService;
    }
}
