export function testStatus(cell) {
  const aliveNeighboursCount = cell.neighbours.filter(neighbour => neighbour.status === 1).length;
  const currentCell = cell.cell.status;

  if (aliveNeighboursCount === 2 || aliveNeighboursCount === 3) {
    return 1;
  }

  if (currentCell === 1 && aliveNeighboursCount < 2) {
    return 0;
  }

  if (currentCell === 1 && aliveNeighboursCount > 3) {
    return 0
  }

  if (currentCell === 0 && aliveNeighboursCount === 3) {
    return 1;
  }
}
