package com.justread.api.core.service;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

import java.util.List;
import java.util.Map;

public interface IListBooksService {

    public EntityResult listBooksQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;

    public EntityResult listBooksInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

    public EntityResult listBooksUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

    public EntityResult listBooksDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;

    public EntityResult booksQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;
}
