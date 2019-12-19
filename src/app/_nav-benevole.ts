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
  }
];
