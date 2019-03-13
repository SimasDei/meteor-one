import './main.html';
import Default, { greetUser, name } from '../imports/utils';
import { add } from '../imports/math';
console.log({
  greetUser: greetUser(),
  name,
  math: add(2, 2),
  Default
});
