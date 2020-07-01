package com.justread.model.core.service;

import com.justread.api.core.service.IAuthorService;
import com.justread.model.core.dao.AuthorDao;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("AuthorService")
@Lazy
public class AuthorService implements IAuthorService {

    @Autowired
    private AuthorDao authorDao;
    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult authorQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.authorDao, keyMap, attrList);
    }

    @Override
    public EntityResult authorInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.authorDao, attrMap);
    }

    @Override
    public EntityResult authorUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.authorDao, attrMap, keyMap);
    }

    @Override
    public EntityResult authorDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.authorDao, keyMap);
    }
}
