package com.justread.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository("ListBooksDao")
@Lazy
@ConfigurationFile(configurationFile = "dao/ListBooksDao.xml", configurationFilePlaceholder = "dao/placeholders.properties")
public class ListBooksDao extends OntimizeJdbcDaoSupport {

    public static final String ATTR_ID = "list_books_id";
    public static final String ATTR_BOOK_ID = "book_id";
    public static final String ATTR_LIST_ID = "list_id";
    public static final String ATTR_ADDED_TO_LIST_DATE = "book_added_to_list_date";
    public static final String BOOKS = "books";

}
