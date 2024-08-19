function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function showCourseContent(courseId) {
    const contents = document.querySelectorAll('.course-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });
    document.getElementById(courseId).style.display = 'block';
}

function postReply() {
    const textarea = document.querySelector('#forum textarea');
    const newPost = document.createElement('div');
    newPost.classList.add('forum-post');
    newPost.innerHTML = `<p>You: ${textarea.value}</p>`;
    document.querySelector('.forum-thread').appendChild(newPost);
    textarea.value = '';
}

function submitQuiz() {
    const answer = document.getElementById('quiz-answer').value.toLowerCase();
    const feedback = document.getElementById('quiz-feedback');
    if (answer === 'hypertext markup language') {
        feedback.textContent = 'Correct!';
    } else {
        feedback.textContent = 'Try again.';
    }
}

// Initialize the first section as visible
document.addEventListener('DOMContentLoaded', () => {
    showSection('courses');
});