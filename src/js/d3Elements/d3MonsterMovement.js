SCENE_WIDTH = screen.availWidth
SCENE_HEIGHT = screen.availHeight+80
SCALE = 0.07
const scene = document.getElementById("scene");
// const mouse = {
//   x: 0,
//   y: 0,
//   inside: false
// };

// Create main SVG container
const svg = d3.select("#scene")
  .append("svg")
  .attr("width", SCENE_WIDTH)
  .attr("height", SCENE_HEIGHT);



window.updateMonster = function(delta, velocity, group, position) {
  if (position[0] > SCENE_WIDTH*1.1) { position[0] = position[2]-50; }
  else { position[0] += BASE_VELOCITY * velocity * delta; }

  group.attr(
    "transform",
    `translate(${position[0]}, ${SCENE_HEIGHT-301-position[1]}) scale(0.07)`
  );

  return position;
}

// scene.addEventListener("pointermove", (e) => {
//   const rect = scene.getBoundingClientRect();
//   mouse.x = e.clientX - rect.left;
//   mouse.y = e.clientY - rect.top;
//   mouse.inside = true;
// });

// scene.addEventListener("pointerleave", () => {
//   mouse.inside = false;
// });

// window.updatePlayer = function(group, position) {
//   position[0]=mouse.x; position[1]=mouse.y;

//   group.attr(
//     "transform",
//     `translate(${Math.round(position[0])}, ${Math.round(position[1])}) scale(0.07)`
//   );

//   return position;
// }