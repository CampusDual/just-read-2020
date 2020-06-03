package com.justread.model.core.service;

import com.justread.api.core.service.IBookService;
import com.justread.model.core.dao.BookDao;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("BookService")
@Lazy
public class BookService implements IBookService {

    @Autowired
    private BookDao bookDao;
    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult bookQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.bookDao, keyMap, attrList);
    }

    @Override
    public EntityResult bookInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.bookDao, attrMap);
    }

    @Override
    public EntityResult bookUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.bookDao, attrMap, keyMap);
    }

    @Override
    public EntityResult bookDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.bookDao, keyMap);
    }
}
