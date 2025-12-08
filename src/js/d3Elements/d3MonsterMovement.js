window.updateMonster = function(delta, velocity, group, position) {
  if (position[0] > 6150) { position[0] = position[2]-50; }
  else { position[0] += BASE_VELOCITY * velocity * delta; }

  group.attr(
    "transform",
    `translate(${position[0]}, ${position[1]}) scale(0.08)`
  );

  return position;
}
