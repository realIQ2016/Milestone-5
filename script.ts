const form = document.getElementById('Resume-form')as HTMLFormElement;
const resumeDisplayElement = document.getElementById('Resume-Display')as HTMLDivElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name =( document.getElementById('name')as HTMLInputElement).value;
    const email =( document.getElementById('email')as HTMLInputElement).value;
    const phone = (document.getElementById('phone')as HTMLInputElement).value;
    const education =( document.getElementById('education')as HTMLInputElement).value;
    const experience =( document.getElementById('experience')as HTMLInputElement).value;
    const skills = (document.getElementById('skills')as HTMLInputElement).value;

    const resumeHTML = `
<h2><b>Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
<p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
<p><b>Phone:</b><span contenteditable="true"> ${phone}</span></p>

<h3>Education</h3>
<p contenteditable="true">${education}</p>

<h3>Experience</h3>
<p contenteditable="true">${experience}</p>

<h3>Skills</h3>
<p contenteditable="true">${skills}</p>
`;

    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The resume display element is missing.');
    }

const shareableLink  = `${window.location.origin}/viewResume.html?id=${uniqueId}`;

document.getElementById(`shareableLink`)?.innerHTML=`
share your resume with this link: <a href ="${shareableLink}" target ="-blank">${shareableLink}</a>
`;




});
