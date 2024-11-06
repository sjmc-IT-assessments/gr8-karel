// src/lib/karel-engine.ts

type Direction = 'north' | 'east' | 'south' | 'west';
type Position = { x: number; y: number };

interface KarelState {
  position: Position;
  direction: Direction;
  balls: Position[];
  walls: [Position, Position][];
}

export class KarelEngine {
  private state: KarelState;
  private commands: string[] = [];
  private worldSize: { width: number; height: number };

  constructor(initialState: KarelState, worldSize: { width: number; height: number }) {
    this.state = initialState;
    this.worldSize = worldSize;
  }

  move() {
    const newPosition = this.getNextPosition();
    if (this.isValidMove(newPosition)) {
      this.state.position = newPosition;
      this.commands.push('move()');
    } else {
      throw new Error('Karel crashed into a wall!');
    }
  }

  turnLeft() {
    const directions: Direction[] = ['north', 'west', 'south', 'east'];
    const currentIndex = directions.indexOf(this.state.direction);
    this.state.direction = directions[(currentIndex + 1) % 4];
    this.commands.push('turnLeft()');
  }

  putBall() {
    const { x, y } = this.state.position;
    this.state.balls.push({ x, y });
    this.commands.push('putBall()');
  }

  takeBall() {
    const { x, y } = this.state.position;
    const ballIndex = this.state.balls.findIndex(
      ball => ball.x === x && ball.y === y
    );
    if (ballIndex === -1) {
      throw new Error('No ball to take!');
    }
    this.state.balls.splice(ballIndex, 1);
    this.commands.push('takeBall()');
  }

  private getNextPosition(): Position {
    const { x, y } = this.state.position;
    switch (this.state.direction) {
      case 'north':
        return { x, y: y + 1 };
      case 'east':
        return { x: x + 1, y };
      case 'south':
        return { x, y: y - 1 };
      case 'west':
        return { x: x - 1, y };
    }
  }

  private isValidMove(position: Position): boolean {
    return (
      position.x >= 0 &&
      position.x < this.worldSize.width &&
      position.y >= 0 &&
      position.y < this.worldSize.height &&
      !this.hasWall(this.state.position, position)
    );
  }

  private hasWall(from: Position, to: Position): boolean {
    return this.state.walls.some(
      ([p1, p2]) =>
        (p1.x === from.x && p1.y === from.y && p2.x === to.x && p2.y === to.y) ||
        (p2.x === from.x && p2.y === from.y && p1.x === to.x && p1.y === to.y)
    );
  }

  getState(): KarelState {
    return { ...this.state };
  }

  getCommands(): string[] {
    return [...this.commands];
  }
}