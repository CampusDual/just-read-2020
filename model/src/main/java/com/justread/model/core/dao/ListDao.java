package com.justread.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository("ListDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/ListDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class ListDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_ID = "list_id";
    public static final String ATTR__NAME = "list_name";
    public static final String ATTR_DESCRIPTION = "list_description";
    public static final String ATTR_CREATE_DATE = "list_create_date";
    public static final String USER = "user";
}
