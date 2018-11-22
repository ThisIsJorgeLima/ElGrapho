const NumberFormatter = require('../../formatters/NumberFormatter');

const Count = function(config) {
  let wrapper = this.wrapper = document.createElement('span');
  let container = config.container;
  let vertices = config.vertices;
  let pointCount = vertices.points ? vertices.points.positions.length/2 : 0;
  let triangleCount = vertices.triangles ? vertices.triangles.positions.length/6 : 0;

  wrapper.innerHTML = NumberFormatter.addCommas(pointCount) + ' points + ' + NumberFormatter.addCommas(triangleCount) + ' triangles';
  wrapper.className = 'el-grapho-count';

  container.appendChild(wrapper);
};

Count.prototype = {

};

module.exports = Count;