db.quizes.drop();

db.quizes.insert({
    name: 'Ireland Quiz',
    icon: 'quizz1/quizz1.jpg',
    keywords: ['ireland', 'europe'],
    questions: [{
        question: 'In which city is Guinness beer factory?',
        video: null,
        txtAnswers: ["Dublin", "Cork", "Dundalk", "Athlonem"],
        imgAnswers: [],
        solutions: [0],
        points: 3
    },
    {
        question: 'A savoury blood pudding with a blend of onions, pork fat, oatmeal and pigs blood is called:',
        video: null,
        txtAnswers: ["uster fry", "black pudding", "sandwich", "english breakfast"],
        imgAnswers: [],
        solutions: [1],
        points: 3
    },
    {
        question: 'When Irish dance born?',
        video: null,
        txtAnswers: ["1888", "1893", "1889", "1906"],
        imgAnswers: [],
        solutions: [1],
        points: 3
    },
    {
        question: 'Where is Eyre Square?',
        video: null,
        txtAnswers: ["Donegal", "Carlingford", "Dublin", "Galway"],
        imgAnswers: [],
        solutions: [3],
        points: 3
    }]
});

db.quizes.insert({ 
    name: 'France Quiz',
    icon: 'quizz2/quizz2.jpg',
    keywords: ['france', 'europe'],
    questions: [{
        question: 'In which city we can find a place called "Terrils"?',
        video: null,
        txtAnswers: ["Paris", "Eze", "Lens", "Arras"],
        imgAnswers: [],
        solutions: [2],
        points: 3
    },
    {
        question: 'Which stadium you can see in this video?',
        video: "quizz2/movie.mp4",
        txtAnswers: ["Stade de France in Saint-Denis", "Parc des Princes in Paris", "Allianz Riviera in Nicea", "Stade Bollaert Delelis in Lens"],
        imgAnswers: [],
        solutions: [3],
        points: 3
    },
    {
        question: 'Which of these place you can see in Lens?',
        video: null,
        txtAnswers: [],
        imgAnswers: ["quizz2/louvre.jpg", "quizz2/stadium.jpg", "quizz2/other.jpg", "quizz2/other2.jpg"],
        solutions: [0, 1],
        points: 3
    }]
});
db.quizes.insert({ 
    name: 'Poland Quiz',
    icon: 'quizz3/quizz3.jpg',
    keywords: ['poland', 'europe'],
    questions: [{
        question: '',
        video: null,
        txtAnswers: ["", "", "", ""],
        imgAnswers: [],
        solutions: [2],
        points: 3
    },
    {
        question: '',
        video: null,
        txtAnswers: ["", "", "", ""],
        imgAnswers: [],
        solutions: [3],
        points: 3
    },
    {
        question: '',
        video: null,
        txtAnswers: [],
        imgAnswers: [],
        solutions: [],
        points: 3
    }]
});
db.quizes.insert({ 
    name: 'China Quiz',
    icon: 'quizz4/quizz4.jpg',
    keywords: ['china', 'asia'],
    questions: [{
        question: '',
        video: null,
        txtAnswers: ["", "", "", ""],
        imgAnswers: [],
        solutions: [2],
        points: 3
    },
    {
        question: '',
        video: null,
        txtAnswers: ["", "", "", ""],
        imgAnswers: [],
        solutions: [3],
        points: 3
    },
    {
        question: '',
        video: null,
        txtAnswers: [],
        imgAnswers: [],
        solutions: [],
        points: 3
    }]
});
