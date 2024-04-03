document.getElementById('love-preference-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const answers = {
        question1: document.getElementById('question1').value,
        question2: document.getElementById('question2').value,
        question3: document.getElementById('question3').value,
        question4: document.getElementById('question4').value,
        question5: document.getElementById('question5').value
    };

    const results = {
        'romantic-dinner_very-important_comfortable_emotional-connection_love-surprises': 'You seem to prefer a traditional, intimate relationship with an emphasis on emotional connection and romantic gestures.',
        'romantic-dinner_not-important_comfortable_emotional-connection_love-surprises': 'You might enjoy a traditional, intimate relationship where emotional connection matters more than physical affection.',
        'fun-activity_very-important_private_physical-attraction_love-surprises': 'You might enjoy a dynamic, passionate relationship with an emphasis on physical chemistry and romantic surprises.',
        'fun-activity_not-important_private_physical-attraction_love-surprises': 'You seem to prefer a relationship where physical chemistry and surprises keep things exciting.'
        'romantic-dinner_very-important_comfortable_emotional-connection_love-surprises': 'You seem to prefer a traditional, intimate relationship with an emphasis on emotional connection and romantic gestures.',
        'romantic-dinner_not-important_comfortable_emotional-connection_love-surprises': 'You might enjoy a traditional, intimate relationship where emotional connection matters more than physical affection.',
        'fun-activity_very-important_private_physical-attraction_love-surprises': 'You might enjoy a dynamic, passionate relationship with an emphasis on physical chemistry and romantic surprises.',
        'fun-activity_not-important_private_physical-attraction_love-surprises': 'You seem to prefer a relationship where physical chemistry and surprises keep things exciting.',
        'romantic-dinner_very-important_private_physical-attraction_anxious-surprises': 'You might enjoy a traditional, intimate relationship with an emphasis on emotional connection, but prefer to avoid surprises.',
        'romantic-dinner_not-important_private_physical-attraction_anxious-surprises': 'You might prioritize emotional connection in a relationship and prefer to avoid surprises and physical affection.',
        'fun-activity_very-important_comfortable_emotional-connection_anxious-surprises': 'You might enjoy a dynamic, passionate relationship with an emphasis on emotional connection, but prefer to avoid surprises.',
        'fun-activity_not-important_comfortable_emotional-connection_anxious-surprises': 'You might prioritize emotional connection in a relationship and prefer to avoid surprises and physical affection.'
    };

    const key = `${answers.question1}_${answers.question2}_${answers.question3}_${answers.question4}_${answers.question5}`;

    let result = results[key] || 'Your personality type is not determined based on this survey.';

    document.getElementById('result').innerText = result;
    document.getElementById('result').style.display = 'block';
});
