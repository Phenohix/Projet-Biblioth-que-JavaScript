async function createCartGoblin(x, y) {

  // Load all SVG files as real SVG DOM
  const [cartXML, goblinXML, barXML] = await Promise.all([
    d3.xml("src/art/Cart.svg"),
    d3.xml("src/art/Gobelin-Green__leg_L_Forth.svg"),
    d3.xml("src/art/Cart_handle.svg"),
  ]);

  // Create main SVG container
  const svg = d3.select("#scene")
    .append("svg")
    .attr("width", 6000)
    .attr("height", 1300);

  // Add a scaling group so everything scales together
  const group = svg.append("g")
    .attr("class", "goblin-group")
    .attr("transform", `translate(${x}, ${y}) scale(0.08)`);

  // Append each asset in correct stacking order:
  // Cart → Goblin → Bar (bar on top)
  const goblin = group.node().appendChild(goblinXML.documentElement);
  const bar    = group.node().appendChild(barXML.documentElement);
  const cart   = group.node().appendChild(cartXML.documentElement);

  // Now align elements — tweak these numbers visually
  d3.select(cart)
    .attr("transform", "translate(0,40)");

  d3.select(goblin)
    .attr("transform", "translate(4530,0)");

  d3.select(bar)
    .attr("transform", "translate(0,48)");

  return group
};

window.updateMonster = function(delta, velocity, group, position) {
  if (position[0] > 6150) { position[0] = -615; }
  else { position[0] += BASE_VELOCITY * velocity * delta; }

  group.attr(
    "transform",
    `translate(${position[0]}, ${position[1]}) scale(0.08)`
  );

  return position;
}
