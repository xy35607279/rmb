import _ from 'lodash';
import { ROUTE_CONFIG_TYPE } from '@/config/constants';
import internationalSettlement from './config/internationalSettlement';
import home from './config/home';
import login from './config/login';
import test from './config/test';

const {
  MENU,
  SUB_MENU,
  MENU_ITEM
} = ROUTE_CONFIG_TYPE;

let $id = 0;

const originalConfig = [
  ...(_.isArray(login) ? login : [login]),
  ...(_.isArray(test) ? test : [test]),
  ...(_.isArray(home) ? home : [home]),
  ...(_.isArray(internationalSettlement) ? internationalSettlement : [internationalSettlement])
];

const menuMap = {

};
const routes = [

];

const generateId = () => {
  $id += 1;
  return `${$id}`;
};

const getRouteInfo = (config, parentRoute) => {
  const { permissions } = config;
  const route = _.omit(config, ['lang', 'type', 'children', 'permissions']);
  if (!_.isFunction(route.component)) {
    return null;
  }
  const isAbsolutePath = _.startsWith(config.path, '/');
  const infix = '/';
  const parentFullPath = (parentRoute && parentRoute.meta.fullPath) ? parentRoute.meta.fullPath : '';
  const fullPath = isAbsolutePath ? config.path : `${parentFullPath}${infix}${config.path}`;
  route.meta = { fullPath, permissions, ...route.meta };
  return route;
};

const getMenuInfo = (config) => {
  const { lang, type, permissions } = config;

  if (_.includes([MENU, SUB_MENU, MENU_ITEM], type)) {
    return {
      lang, type, permissions, menuId: generateId()
    };
  }
  return null;
};

const processConfig = (config, parentRoute, parentMenu, channelId) => {
  const route = getRouteInfo(config, parentRoute);
  const menuInfo = getMenuInfo(config);
  let rootMenuId = channelId; // 一级菜单ID，或是说这是属于某一频道的ID
  if (config.type === MENU) { // 如果当前是一级菜单，root菜单的ID就当前菜单的ID
    rootMenuId = menuInfo.menuId;
  }
  // 当前没有路由信息就使用父路由信息
  const tempRoute = route || parentRoute;
  const routesOfMenuItem = []; // 当前菜单下所有路由
  if (config.children && config.children.length) { // 如果配置了子路由
    config.children.forEach((child) => {
      // 计算每一个子路由的路由信息和菜单信息
      const { route: subRoute, menuInfo: subMenuInfo } = processConfig(child, tempRoute, menuInfo || parentMenu, rootMenuId);

      // 如果子菜单信息存在，就放入当前菜单的children中
      if (subMenuInfo) {
        menuInfo.children = menuInfo.children || [];
        menuInfo.children.push(subMenuInfo);
      }
      // 如果子路由存在，就放入当前路由的children中
      if (subRoute) {
        tempRoute.children = tempRoute.children || [];
        tempRoute.children.push(subRoute);
        routesOfMenuItem.push(subRoute);
      }
    });
  }
  // 如果是Menu的根节点, 就把这个菜单放到menuMap中
  if (config.type === MENU && menuInfo) {
    menuMap[menuInfo.menuId] = menuInfo;
  }
  // 如果是菜单
  if (config.type === MENU_ITEM) {
    if (route) {
      menuInfo.path = route.meta.fullPath;
    } else {
      menuInfo.path = routesOfMenuItem[0].meta.fullPath;
    }
  }
  if (route) {
    const menuId = menuInfo ? menuInfo.menuId : parentMenu && parentMenu.menuId;
    route.meta.menuId = menuId; // 每一个路由的meta中都记录是属于哪个菜单项的
    route.meta.channelId = rootMenuId; // 每一个路由的meta中都记录是属于哪个一级菜单项的
  }
  // 没有父路由的，默认它就是第一层路由
  if (!parentRoute && route) {
    routes.push(route);
  }
  return {
    route,
    menuInfo
  };
};

// 遍历原始的路由配置
const traverseOriginalConfig = () => {
  originalConfig.forEach((config) => {
    processConfig(config);
  });
};

traverseOriginalConfig();

// 某个muen的第一默认打开的菜单
const getFirstMenuPath = (menus) => {
  const firstMenu = menus[0];
  if (!firstMenu) {
    return '#';
  }
  if (firstMenu.type === MENU_ITEM) {
    return firstMenu.path;
  }
  return getFirstMenuPath(firstMenu.children);
};

export const getMenus = channelId => [...menuMap[channelId].children];

// 计算出所有的一级菜单
export const getChannels = () => {
  const channels = [];
  _.forIn(menuMap, (value, key) => {
    const menus = getMenus(key);
    const data = { ..._.omit(value, ['children']), path: getFirstMenuPath(menus) };
    channels.push(data);
  });
  return channels;
};

export const getRoutes = () => [...routes];
