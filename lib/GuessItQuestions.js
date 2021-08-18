import { QuestionModel } from './QuestionModel'

const question1 = new QuestionModel (
    'What sport does the person practice?',
    'Sports',
    [
        {
            guess: 'Zlatan Ibrahimovic',
            answer: 'Soccer'
        },
        {
            guess: 'Armand Duplantis',
            answer: 'Pole vault'
        },
        {
            guess: 'Thomas Morstead',
            answer: 'American Football'
        },
        {
            guess: "Nick Kyrgios",
            answer: "Tennis"
        },
        {
            guess: "Joe Thornton",
            answer: "Hockey"
        },
        {
            guess: "Dustin Porier",
            answer: "Mixed Martial Arts"
        },
        {
            guess: "Simone Biles",
            answer: "Gymnastics"
        }

    ]
)

const question2 = new QuestionModel (
    'What sport does the person practice?',
    'Sports',
    [
        {
            guess: 'Zlatan Ibrahimovic',
            answer: 'Soccer'
        },
        {
            guess: 'Armand Duplantis',
            answer: 'Pole vault'
        },
        {
            guess: 'Thomas Morstead',
            answer: 'American Football'
        }
    ]
)

export const questions = [ 
    question1,
    question2
]