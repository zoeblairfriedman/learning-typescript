class Monster {
  constructor(public color: string){}

  protected roar(): string{
    return "ROOOOOOAAARRR"
  }
  scare(): string{
    return this.roar()
  }

}



class Mogwai extends Monster {
  scare(): string{
    return this.roar()
  }
}

let gizmo = new Mogwai("brown")
console.log(gizmo.scare())