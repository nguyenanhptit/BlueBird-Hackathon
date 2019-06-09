export interface IQuestion {
  id: number;
  content: string;
  answer: IAnswer;
}

export interface IAnswer {
  id: number;
  result: string;
}
