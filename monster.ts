class Monster {
  constructor(public color: string){}

  private roar(): string{
    return "ROOOOOOAAARRR"
  }
  scare(): string{
    return this.roar()
  }

}

let gizmo = new Monster("brown")
// gizmo.roar()