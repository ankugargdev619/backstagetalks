const issues = document.querySelectorAll('.issue');

const body = document.querySelector('body');

console.log(body);

const options = {
    threshold:0.75,
}

const observer = new IntersectionObserver(sections =>{
    sections.forEach(section=>{
        if(section.isIntersecting){
            const color = section.target.getAttribute('data-color');
            console.log(color);
            body.removeAttribute('class');
            body.classList.add(color);

        }
    })
},options);

issues.forEach(issue=>{
    observer.observe(issue);
})
