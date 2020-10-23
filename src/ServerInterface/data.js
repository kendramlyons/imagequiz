const q1 = {
    title: 'What is this?',
    picture: 'lily.jpg',
    choices: ['daisy', 'daffodil', 'lily', 'rose'],
    correct: 'lily'
}
const q2 = {
    title: 'What is this?',
    picture: 'daisy.jpg',
    choices: ['daisy', 'daffodil', 'lily', 'rose'],
    correct: 'daisy'
}
const q3 = {
    title: 'What is this?',
    picture: 'rose.png',
    choices: ['daisy', 'daffodil', 'lily', 'rose'],
    correct: 'rose'
}
const q4 = {
    title: 'What is this?',
    picture: 'daffodil.png',
    choices: ['daisy', 'daffodil', 'lily', 'rose'],
    correct: 'daffodil'
}
const q5 = {
    title: 'What is this?',
    picture: 'cherryblossom.png',
    choices: ['tulip', 'cherry blossom', 'lily', 'rose'],
    correct: 'cherry blossom'
}
const q6 = {
    title: 'what is this?',
    picture: 'tulip.png',
    choices: ['tulip', 'cherry blossom', 'lily', 'rose'],
    correct: 'tulip'
}
const q7 = {
    title: 'What is this?',
    picture: 'sunflower.png',
    choices: ['tulip', 'cherry blossom', 'sunflower', 'rose'],
    correct: 'sunflower'
}
const q8 = {
    title: 'What is this?',
    picture: 'waterlily.png',
    choices: ['tulip', 'cherry blossom', 'sunflower', 'waterlily'],
    correct: 'waterlily'
}
const quiz1 = {
    title: 'Quiz 1',
    picture: 'cherryblossom.png',
    questions: [q1, q2, q3, q4, q5, q6],
}
const quiz2 = {
    title: 'Quiz 2',
    picture: 'sunflower.png',
    questions: [q2, q3, q4, q5, q6, q7],
}
const quiz3 = {
    title: 'Quiz 3',
    picture: 'waterlily.png',
    questions: [q3, q4, q5, q6, q7, q8],
}
let quizzes = [quiz1, quiz2, quiz3];

export default quizzes;