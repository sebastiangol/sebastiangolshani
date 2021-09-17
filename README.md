# sebastiangolshani - Personal Portfolio

This website is deployed using vercel: https://sebastiangolshani.vercel.app/

This is a personal portfolio website made using React/Next.js and Emailjs.

• The webpage is fully responsive on all screen sizes, using CSS media queries.

• Emailjs is used for handling form submissions.

The header sticks to the top of the page, and contains buttons that scroll the page to specific sections depending on the button.

The landing page contains a title, image and some contact information and clickable links.

On the landing page, the header is merged with the page. When the page is scrolled far enough, the header changes its colour and shadow to differenciate itself from the page content.

The About section contains text.

The Skills section contains clickable skills. 
Some of the skills have links that redirect to a technology's official website. 
The onClick styling is different depending if the skill has a link or not.

The Projects section contains projects. A project has an image, descriptions and two clickable buttons for the deployed website and the code.

The Contact section contains an email in text and a contact form.

• The contact form requires an email, name and message. The form is validated using the React Hook Form package. 

• On submission, if any fields are invalid, a red error message will display below the field. 

• If a valid submission is made, a success message will be displayed. 

• On submission, a function from Emailjs will be performed, which will send the form submission to Emailjs, who will send the form submission in the form of an email.
