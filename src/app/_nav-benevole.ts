import {INavData} from '@coreui/angular';

export const benevoleNav: INavData [] = [
  {
    name: 'Associations',
    url: '/benevole',
    icon: 'icon-user',
    children: [
      {
        name: 'Liste Associations',
        url: '/benevole',
        icon: 'icon-user',
      }
    ]
  },
  {
    name: 'Annonces',
    url: '/benevole/annonces',
    icon: 'icon-note',
    children: [
      {
        name: 'Liste Annonces',
        url: '/benevole/annonces',
        icon: 'icon-note',
      }
    ]
  },
  {
    name: 'Evenements',
    url: '/benevole/evenements',
    icon: 'icon-calendar',
    children: [
      {
        name: 'Liste Evenements',
        url: '/benevole/evenements',
        icon: 'icon-calendar',
      }
    ]
  },
  {
    name: 'Profile',
    url: '/benevole/profile',
    icon: 'icon-settings',
    children: [
      {
        name: 'Modifier profile',
        url: '/benevole/profile',
        icon: 'icon-settings',
      }
    ]
  }
];
