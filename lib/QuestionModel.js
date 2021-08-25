export class QuestionModel {
  constructor(
    question,
    genre,
    typeOfQuestion,
    point
    /*, guess2, guess3, guess4, guess5, guess6, guess7, guess8*/
  ) {
    this.question = question
    this.genre = genre
    this.typeOfQuestion = typeOfQuestion
    this.point = point

    // this.guess2 = guess2;
    // this.guess3 = guess3;
    // this.guess4 = guess4;
    // this.guess5 = guess5;
    // this.guess6 = guess6;
    // this.guess7 = guess7;
    // this.guess8 = guess8;
  }
}
