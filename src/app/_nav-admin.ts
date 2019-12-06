import {INavData} from '@coreui/angular';

export const adminNav: INavData[] = [{
  name: 'Liste Associations',
  url: '/admin',
  icon: 'icon-badge',
  children: [
    {
      name: 'Liste Associations',
      url: '/admin',
      icon: 'icon-badge',
    },
    {
      name: 'Ajouter Association',
      url: '/admin/association',
      icon: 'icon-badge',
    }
  ]
},
  {
    name: 'Liste Benevoles',
    url: '/admin/benevoles',
    icon: 'icon-user',
    children: [
      {
        name: 'Liste Benevoles',
        url: '/admin/benevoles',
        icon: 'icon-user',
      }
    ]
  },
  {
    name: 'Administrateur',
    url: '/admin/profile',
    icon: 'icon-settings',
    children: [
      {
        name: 'Modifier Admin',
        url: '/admin/profile',
        icon: 'icon-settings',
      }
    ]
  }
];
