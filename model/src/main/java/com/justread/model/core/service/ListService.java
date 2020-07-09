package com.justread.model.core.service;

import com.justread.api.core.service.IListService;
import com.justread.model.core.dao.ListDao;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("ListService")
@Lazy
public class ListService implements IListService {

    @Autowired
    private ListDao listDao;
    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult listQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.listDao, keyMap, attrList);
    }

    @Override
    public EntityResult listInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.insert(this.listDao, attrMap);
    }

    @Override
    public EntityResult listUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.update(this.listDao, attrMap, keyMap);
    }

    @Override
    public EntityResult listDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
        return this.daoHelper.delete(this.listDao, keyMap);
    }

    @Override
    public EntityResult userQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException {
        return this.daoHelper.query(this.listDao, keyMap, attrList, listDao.USER);
    }


}
