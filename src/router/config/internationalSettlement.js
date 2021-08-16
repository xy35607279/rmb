import { ROUTE_CONFIG_TYPE } from '@/config/constants';

const Home = () => import('@/views/layout/home.vue');
const Test = () => import('@/views/internationalSettlement/test.vue');

const {
  MENU,
  SUB_MENU,
  MENU_ITEM,
  PAGE_VIEW
} = ROUTE_CONFIG_TYPE;

const internationalSettlement = {
  lang: 'Settlement',
  type: MENU,
  component: Home,
  permissions: [],
  path: '/settlement',
  children: [
    {
      lang: 'menu-1',
      type: MENU_ITEM,
      permissions: [],
      children: [
        {
          path: 'test',
          type: PAGE_VIEW,
          component: Test
        },
        {
          path: 'test2',
          type: PAGE_VIEW,
          component: Test
        }
      ]
    },
    {
      lang: 'menu-2',
      type: SUB_MENU,
      permissions: [],
      children: [
        {
          lang: 'menu-2-1',
          type: MENU_ITEM,
          permissions: [],
          children: [
            {
              path: 'test-2-1',
              type: PAGE_VIEW,
              component: Test
            }
          ]
        },
        {
          lang: 'menu-2-2',
          type: SUB_MENU,
          permissions: [],
          children: [
            {
              lang: 'menu-2-2-1',
              type: MENU_ITEM,
              permissions: [],
              children: [
                {
                  path: 'test-2-2-1',
                  type: PAGE_VIEW,
                  component: Test
                }
              ]
            },
            {
              lang: 'menu-2-2-2',
              type: MENU_ITEM,
              permissions: [],
              children: [
                {
                  path: 'test-2-2-2',
                  type: PAGE_VIEW,
                  component: Test
                }
              ]
            }
          ]
        },
        {
          lang: 'menu-2-3',
          type: MENU_ITEM,
          permissions: [],
          children: [
            {
              path: 'test-2-3',
              type: PAGE_VIEW,
              component: Test
            }
          ]
        }
      ]
    },
    {
      lang: 'menu-3',
      type: MENU_ITEM,
      permissions: [],
      children: [
        {
          path: 'test-3',
          type: PAGE_VIEW,
          component: Test
        }
      ]
    }
  ]
};

export default internationalSettlement;
