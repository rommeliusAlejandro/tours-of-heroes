import {InMemoryDbService} from "angular-in-memory-web-api";

export class InMemoryDataService  implements InMemoryDbService {

  createDb() {
    const heroes = [
      {id: 1, name: 'Magneto'},
      {id: 2, name: 'Professor X'},
      {id: 3, name: 'Wolverine'},
      {id: 4, name: 'Storm'},
      {id: 5, name: 'Cyclops'},
      {id: 6, name: 'Mystic'},
      {id: 7, name: 'Phoenix'},
      {id: 8, name: 'Capitan America'},
      {id: 9, name: 'Spider-man'},
      {id: 10, name: 'Ant-man'}
    ];

    return {heroes};
  }
}
