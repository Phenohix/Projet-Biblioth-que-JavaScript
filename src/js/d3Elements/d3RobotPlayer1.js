async function createPlayer1(x, y) {

  // Load all SVG files as real SVG DOM
  const [bodyXML, eyeXML, scleraXML, pinceLXML, pinceRXML] = await Promise.all([
    d3.xml("src/art/Robot_Body.svg"),
    d3.xml("src/art/Robot_Eye-Red.svg"),
    d3.xml("src/art/Robot_Sclera.svg"),
    d3.xml("src/art/Pince_L.svg"),
    d3.xml("src/art/Pince_R.svg")
  ]);

  // Add a scaling group so everything scales together
  const group = svg.append("g")
    .attr("class", "player-one-group")
    .attr("transform", `translate(${x || 0}, ${y || 0}) scale(${SCALE})`);

  // Append each asset in correct stacking order:
  const sclera = group.node().appendChild(scleraXML.documentElement);
  const eye    = group.node().appendChild(eyeXML.documentElement);
  const body   = group.node().appendChild(bodyXML.documentElement);
  const pinceL   = group.node().appendChild(pinceLXML.documentElement);
  const pinceR   = group.node().appendChild(pinceRXML.documentElement);

  // Aligning the elements visually
  d3.select(body)
    .attr("transform", `translate(0,0) scale(${SCALE*10})`);
  d3.select(eye)
    .attr("transform", `translate(0,0) scale(${SCALE*10})`);
  d3.select(sclera)
    .attr("transform", `translate(0,0) scale(${SCALE*10})`);
  d3.select(pinceL)
    .attr("transform", `translate(0,0) scale(${SCALE*10})`);
  d3.select(pinceR)
    .attr("transform", `translate(0,0) scale(${SCALE*10})`);

  return group
};
