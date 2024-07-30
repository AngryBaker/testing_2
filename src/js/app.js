// TODO: write your code here
import sum from './basic';

export default function healthRater(list) {
    const sortList = list.sort(function (a, b) {
      if (a.health < b.health) {
        return 1;
      }
      if (a.health > b.health) {
        return -1;
      } 
        return 0;
    });
    return sortList;
}

console.log('worked');

console.log(sum([1, 2]));
