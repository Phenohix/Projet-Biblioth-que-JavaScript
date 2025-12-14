// async function createCartGoblin(x, y, groupID) {

//   // Load all SVG files as real SVG DOM
//   const [cartXML, goblinXML, barXML] = await Promise.all([
//     d3.xml("src/art/Cart.svg"),
//     d3.xml("src/art/Gobelin-Green__leg_L_Forth.svg"),
//     d3.xml("src/art/Cart_handle.svg")
//   ]);

//   // Add a scaling group so everything scales together
//   const group = svg.append("g")
//     .attr("class", "goblin-group"+groupID)
//     .attr("transform", `translate(${x || 0}, ${y || 0}) scale(${SCALE})`);

//   // Append each asset in correct stacking order:
//   // Cart → Goblin → Bar (bar on top)
//   const goblin = group.node().appendChild(goblinXML.documentElement);
//   const bar    = group.node().appendChild(barXML.documentElement);
//   const cart   = group.node().appendChild(cartXML.documentElement);

//   // Aligning the elements visually
//   d3.select(cart)
//     .attr("transform", `translate(0,40), scale(${SCALE*10})`);
//   d3.select(goblin)
//     .attr("transform", `"translate(4530,0), scale(${SCALE*10})`);
//   d3.select(bar)
//     .attr("transform", `translate(0,48), scale(${SCALE*10})`);

//   return group
// };

async function createCartGoblin(x, y, groupID) {

  // Load all SVG files as real SVG DOM
  const [cart_goblinXML] = await Promise.all([
    d3.xml("src/art/Cart_goblin.svg")
  ]);

  // Add a scaling group so everything scales together
  const group = svg.append("g")
    .attr("class", "goblin-group"+groupID)
    .attr("transform", `translate(${x || 0}, ${y || 0}) scale(${SCALE})`);

  // Append each asset in correct stacking order:
  const cart_goblin   = group.node().appendChild(cart_goblinXML.documentElement);

  // Aligning the elements visually
  d3.select(cart_goblin)
    .attr("transform", `translate(0,0), scale(${SCALE*10})`);

  return group
};

async function createInkSlime(x, y, groupID) {

  // Load all SVG files as real SVG DOM
  const [ink_slimeXML] = await Promise.all([
    d3.xml("src/art/Ink_slime.svg")
  ]);

  // Add a scaling group so everything scales together
  const group = svg.append("g")
    .attr("class", "slime-group"+groupID)
    .attr("transform", `translate(${x || 0}, ${y || 0}) scale(${SCALE})`);

  // Append each asset in correct stacking order:
  const ink_slime   = group.node().appendChild(ink_slimeXML.documentElement);

  // Aligning the elements visually
  d3.select(ink_slime)
    .attr("transform", `translate(0,0), scale(${SCALE*10})`);

  return group
};