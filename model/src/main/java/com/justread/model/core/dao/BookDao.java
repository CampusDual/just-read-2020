package com.justread.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository("BookDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/BookDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class BookDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_ID = "book_id";
    public static final String ATTR_THUMBNAIL = "book_thumbnail";
    public static final String ATTR_TITLE = "book_title";
    public static final String ATTR_ISBN = "book_isbn";
    public static final String ATTR_DESCRIPTION = "book_description";
    public static final String ATTR_LAUNCH_DATE = "book_launch_date";
    public static final String AUTHORS = "bookAuthors";
}
