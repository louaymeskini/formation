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
  }
];
