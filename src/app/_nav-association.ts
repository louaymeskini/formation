import {INavData} from '@coreui/angular';

export const associationNav: INavData[] = [
  {
    name: 'Benevoles Membres',
    url: '/association',
    icon: 'icon-user',
    children: [
      {
        name: 'Liste Benevoles',
        url: '/association',
        icon: 'icon-user',
      }
    ]
  },
  {
    name: 'Evenements',
    url: '/association/evenements',
    icon: 'icon-calendar',
    children: [
      {
        name: 'Liste Evenements',
        url: '/association/evenements',
        icon: 'icon-calendar',
      },
      {
        name: 'Ajouter Evenements',
        url: '/association/evenements/ajouter',
        icon: 'icon-calendar',
      }
    ]
  },
  {
    name: 'Annonces',
    url: '/association/annonces',
    icon: 'icon-note',
    children: [
      {
        name: 'Liste Annonces',
        url: '/association/annonces',
        icon: 'icon-note',
      },
      {
        name: 'Ajouter Annonce',
        url: '/association/annonces/ajouter',
        icon: 'icon-note',
      }
    ]
  },
  {
    name: 'Association',
    url: '/home/association/profile',
    icon: 'icon-settings',
    children: [
      {
        name: 'Modifier Association',
        url: '/home/profile',
        icon: 'icon-settings',
      }
    ]
  }
];
