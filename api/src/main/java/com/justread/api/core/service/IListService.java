package com.justread.api.core.service;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

import java.util.List;
import java.util.Map;

public interface IListService {

    public EntityResult listQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;

    public EntityResult listInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

    public EntityResult listUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

    public EntityResult listDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

    public EntityResult userQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
}
