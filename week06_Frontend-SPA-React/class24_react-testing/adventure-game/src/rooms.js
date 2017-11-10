
const living = {
  key: 'living',
  name: 'Dusty Living Room',
  description: 'There is a large locked chest',
  items: ['book', 'knife'],
  doors: ['bathroom', 'ballroom'],
  challenge(player) {
    if(player.inventory.indexOf('key') > -1) {
      return {
        item: 'treasure',
        message: 'the key unlocks the chest and you get the treasure!'
      };
    }
  }
  //monsters: 
  // conditions(player) {
  //     if(player.inventory.indexOf('key') > -1) {
  //         return ['treasure']
  //     }
  // }
};

const bathroom = {
  key: 'bathroom',
  name: 'Empty Bathroom',
  items: [],
  doors: ['living']
};

const ballroom = {
  key: 'ballroom',
  name: 'Grand Ballroom',
  items: ['piano', 'key'],
  doors: ['living']
};

const rooms = [living, bathroom, ballroom];

rooms.forEach(room => {
  room.doors = room.doors.map(door => {
    return rooms.find(r => r.key === door);
  });
});

export default rooms;

