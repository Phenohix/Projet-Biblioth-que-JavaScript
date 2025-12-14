async function createBook(format) {

  // Load all SVG files as real SVG DOM
  const [bookXML] = await Promise.all([
    d3.xml("src/art/BookShelf/Book_"+format+".svg")
  ]);

  // Add a scaling group so everything scales together
  const group = svg.append("g")
    .attr("class", "book-group")
    .attr("transform", `translate(800, 0) scale(${SCALE})`);

  // Append each asset in correct stacking order:
  const book   = group.node().appendChild(bookXML.documentElement);

  // Aligning the elements visually
  d3.select(book)
    .attr("transform", `translate(0,0), scale(${SCALE*10})`);

  return group
};

/* pos == "bottom" || "middle" || "top"
side == 1 || 2
*/
async function createShelf(pos, y, side) {
    let posShelf;
    switch (pos) {
        case "bottom":
            posShelf=["bottom-end", "middle-top"];
            break;
        case "middle":
            posShelf=["middle-bottom", "middle-top"];
            break;
        default:
            posShelf=["middle-bottom", "top-end"];
            break;
    }

  // Load all SVG files as real SVG DOM
  const [bottomPartXML, topPartXML] = await Promise.all([
    d3.xml("src/art/BookShelf/Book-shelf-_"+posShelf[0]+".svg"),
    d3.xml("src/art/BookShelf/Book-shelf-_"+posShelf[1]+".svg")
  ]);

  // Add a scaling group so everything scales together
  const group = svg.append("g")
    .attr("class", "book-group")
    .attr("transform", `translate(${800*(side-1) || 0}, ${275*(2-y) || 0}) scale(${SCALE})`);

  // Append each asset in correct stacking order:
  const bottomPart   = group.node().appendChild(bottomPartXML.documentElement);
  const topPart   = group.node().appendChild(topPartXML.documentElement);

  // Aligning the elements visually
  d3.select(bottomPart)
    .attr("transform", `translate(0,0), scale(${SCALE*10})`);
  d3.select(topPart)
    .attr("transform", `translate(0,0), scale(${SCALE*10})`);

  return group
};