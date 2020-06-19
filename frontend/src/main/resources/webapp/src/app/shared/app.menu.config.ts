import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' },
  { id: 'searchResult', name: 'searchResults', route: '/main/search-results', icon: 'searchResults' },
  { id: 'books', name: 'BOOKS', icon: 'mybooks', route: '/main/books'}
];
