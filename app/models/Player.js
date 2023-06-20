

export class Player {
  constructor(name, imageUrl) {
    this.name = name
    this.imgUrl = imageUrl
    this.score = 0
  }

  // get PlayerDetails() {
  //   let details = `Hello, my name is ${this.name} and my score is ${this.score}`
  //   return details
  // }

  // get PlayerCardTemplate() {
  //   return `
  //     < div class="col-12">
  //       <div>
  //         <img class="img-fluid player-img"
  //           src="${this.imgUrl}
  //           alt="${this.name}">
  //           <p>${this.name}</p>
  //           <p>Score: ${this.score}</p>
  //           <div>
  //             <button>Score Goes Up</button>
  //             <button>Score Goes Down</button>
  //           </div>
  //       </div>
  //   </div>
  //   `
  // }
}