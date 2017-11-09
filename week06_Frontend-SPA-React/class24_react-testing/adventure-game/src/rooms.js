
const living = {
    key: 'living',
    name: 'Dusty Living Room',
    items: ['book', 'knife'],
    doors: ['bathroom', 'ballroom'],
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
    items: ['piano'],
    doors: ['living']
};

const rooms = [living, bathroom, ballroom];

rooms.forEach(room => {
    room.doors = room.doors.map(door => {
        return rooms.find(r => r.key === door);
    });
});

export default rooms;

