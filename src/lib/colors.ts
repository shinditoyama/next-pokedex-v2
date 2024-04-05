export function getColor(color: number) {
  switch (color) {
    case 1:
      return "#C4C4A4"; // normal
    case 2:
      return "#C03028"; // fighting
    case 3:
      return "#A890F0"; // flying
    case 4:
      return "#A040A0"; // poison
    case 5:
      return "#E0C068"; // ground
    case 6:
      return "#B8A038"; // rock
    case 7:
      return "#A8B820"; // bug
    case 8:
      return "#705898"; // ghost
    case 9:
      return "#B8B8D0"; // steel
    case 10:
      return "#F08030"; // fire
    case 11:
      return "#6890F0"; // water
    case 12:
      return "#78C850"; // grass
    case 13:
      return "#F8D030"; // electric
    case 14:
      return "#F85888"; // psychic
    case 15:
      return "#98D8D8"; // ice
    case 16:
      return "#7038F8"; // dragon
    case 17:
      return "#705848"; // dark
    case 18:
      return "#EE99AC"; // fairy
    default:
      return "";
  }
}
