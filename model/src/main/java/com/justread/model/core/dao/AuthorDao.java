package com.justread.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository("AuthorDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/AuthorDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class AuthorDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_ID = "author_id";
    public static final String ATTR_FIRST_NAME = "author_first_name";
    public static final String ATTR_LAST_NAME = "author_last_name";

}
