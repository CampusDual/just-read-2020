package com.justread.ws.core.rest;

import com.justread.api.core.service.IBookService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("books")
@ComponentScan(basePackageClasses = {com.justread.api.core.service.IBookService.class})
public class BookRestController extends ORestController<IBookService> {

    @Autowired
    private IBookService bookService;

    @Override
    public IBookService getService() {
        return this.bookService;
    }
}
