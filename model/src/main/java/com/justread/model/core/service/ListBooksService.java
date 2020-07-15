package com.justread.model.core.service;

import com.justread.api.core.service.IListBooksService;
import com.justread.model.core.dao.ListBooksDao;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("ListBooksService")
@Lazy
public class ListBooksService implements IListBooksService {


    @Autowired
    private ListBooksDao listBooksDao;
    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult listBooksQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.listBooksDao, keyMap, attrList);
    }

    @Override
    public EntityResult listBooksInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.listBooksDao, attrMap);
    }

    @Override
    public EntityResult listBooksUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.listBooksDao, attrMap, keyMap);
    }

    @Override
    public EntityResult listBooksDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.listBooksDao, keyMap);
    }

    @Override
    public EntityResult booksQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.listBooksDao, keyMap, attrList, listBooksDao.BOOKS);
    }
}
