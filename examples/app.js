import DRL from '../drl.js';
import {Elements} from '../drl.js';
import Ship from './ship.js';

var {Rectangle, Group, Mask, Text, Sprite} = Elements;

var App = DRL.createClass({
  render: function() {
    return (
      <Group x={0} y={0}>
        <Sprite path='cat.jpeg' x={50} y={100} />
        <Sprite path='cat.jpeg' x={51} y={201} />
        <Sprite path='cat.jpeg' x={52} y={302} />
      </Group>
    );
  }
});

export default App;
