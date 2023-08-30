import React from 'react';

function HomePage() {
    return (
        <>
            <h2>Welcome to my page!</h2>
        <article>
            <h3 id="web-app">About This Web App</h3>
            <p>
                In my portfolio, many technologies are used to create this web application.
                The website utilizes HTML and CSS to create the layout and design of the page.
                This allows for the page to be responsive and look good on any device.
                Express, along with Node.js, is used to create the web server and handle the requests and responses on the backend.
                Additionally, Google Fonts helped enrich the typography of the page.
                To make this site more dynamic, JavaScript and React.js was used to create the frontend.
                This allows for the page to be more interactive and responsive to the user.
                MongoDB and Mongoose were used to create the database and store the data. 
                As for images, images were optimized to allow quick loading for the user. 
                Lastly, the REST architecture allowed the frontend and backend to communicate with each other, resulting in a full stack web application.


            </p>
        </article>
         </>
    );
}

export default HomePage;