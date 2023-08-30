import React from 'react';

function TopicsPage() {
    return (
        <>
            <h2>Web Development Concepts</h2>
        <nav class ="topic-nav">
            <a href="#web-servers">Web Servers</a>
            <a href="#frontend-design">Frontend Design</a>
            <a href="#optimizing-images">Optimizing Images</a>
            <a href="#cascading-stylesheets">Cascading Stylesheets</a>
            <a href="#forms">Forms</a>
            <a href="#express">Express</a>
            <a href="#javascript">JavaScript</a>
            <a href="#dom">Document Object Model</a>
        </nav>
        <article>
            <h3 id="web-servers">Web Servers</h3>
            <p>
                Index is the name of the resource that the <strong>web server</strong> uses and is typically the designated homepage on the web server. 
                In almost all web application, there is a file called index.html that is in the root directory, and this becomes the homepage of the web application. 
                For web servers that use Microsoft's .NET platform, it is default.html instead of index.html. 
                Nonetheless, the main homepage can also be index.js or index.php instead of index.html.
                Then, the web application returns the file whenever a <strong>GET request</strong> is initiated.
            </p>
            <p>
                In order to view my local computer and the web server, I clicked the index.html and ~vosan/ under the network tab, respectively.
                When looking at the file on my local computer, I see the request line that has <strong>GET</strong>, meaning the request is received and reads the resource. 
                There is also a <strong>status code</strong> of 200 with a reason phrase OK that means the request succeeded along with a remote address at 127.0.0.1:5500. 
                It is then followed by the <strong>response headers</strong>, where there are name and value pairs. 
                Such examples include the date, the content-length, and last-modified. 
                When I compare with the web server and my local computer, the <strong>request URL</strong> has an actual scheme, subdomain, domain, and resource which is https://web.engr.oregonstate.edu/~vosan/. 
                There are some differences where vary is “Origin” for my local file and “Accept-Encoding” on the web server. 
                In addition, there is a <strong>server</strong> called “Apache/2.4.6 (CentOS)” on the web server details and my local file does not have.
                As for the response headers, there are almost similar, except the web server has a host with a value of “web.engr.oregonstate.edu” and a cookie which is “__zlcmid=1DplVeMgifHGzLr”.
                Lastly, the body is almost similar for both the local computer and web server, which is seen in the response tab. 
                They both contain the same HTML body.
                However, in my local computer, there is a live-server code that is injected into the body because I am using a VS Code extension to see a live preview instead of dragging the index.html to a Chrome tab.
            </p>
            <p>
                The reason main.css and main.js is not available because the resource cannot be found on the server. 
                This is denoted by a 404 code with a reason phrase “Not Found.” 
                However, favicon.ico has a 202 code with a reason phrase “OK,” which means that the request succeeded, and the resource was found. 
                This succeeded because the OSU server has already provided this automatically.
            </p>
            <p>
                My URL is https://web.engr.oregonstate.edu/~vosan/. 
                The <strong>scheme</strong> of the URL is <strong>HTTPS</strong> that identifies the protocol for the web client and uses it to request the resource. 
                The subdomain is “web.engr” which is in front of the domain, “oregonstate.” 
                The <strong>subdomain</strong> is a subsection of the domain, and the <strong>host domain</strong> name is mapped to an IP address for the server machine. 
                Last but not least, the resource is “~vosan/a1-vosan/” which identifies the resource on the server.
            </p>
        </article>
        <article>
            <h3 id="frontend-design">Frontend Design</h3>
            <p>
                <strong>Frontend design</strong> is the process of creating an appropriate user experience and developing the user interface.
                It involves visual components that have consistent colors, typography, fonts, illustrations, menus, forms, and navigation systems that are cohesive and intuitive.
                Frontend design also encompasses technical skills such as <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> to help create engaging user interfaces for targeted audiences.
            </p>
            <p>
                <strong>Five “E” s of Usability:</strong>
            </p>
            <dl>
                <dt><strong>Effective</strong></dt>
                <dd>Are users receiving complete and accurate results? Users can easily achieve their goals when results are accurate.</dd>
                <dt><strong>Efficient</strong></dt>
                <dd>How quickly can users get results? Users can retrieve results quickly and perform tasks with minimal steps.</dd>
                <dt><strong>Easy to navigate</strong></dt>
                <dd>How easy can a user go from point A to point B? Users can locate their goals by searching and clicking, which empowers reinforced learning. </dd>
                <dt><strong>Error-free</strong></dt>
                <dd>Are there any errors or roadblocks a user is having? If there are, users can easily prevent and recover from the errors.</dd>
                <dt><strong>Enjoyable or Engaging</strong></dt>
                <dd>How well and satisfying does the interface capture the user's interaction? Users can enjoy the content and design that is tailored for them and enhances their overall user experience.</dd>
            </dl>
            <p>
                <strong>Page layout tags</strong> are HTML tags that are used to structure the content of a web page.
                These block-level elements arranges the flow of the content and are typically displayed by browsers with a newline both before and after the element.
                In addition, CSS can be applied to display how the elements of the page can look.
                Moreover, the page layout blocks help machines understand which component is displayed and where exactly is it positioned on the screen.
                Such elements include are: header, section, nav, main, article, aside, figure, and footer.
                The <strong>header</strong> element can include the name, company, or some kind of slogan. 
                The <strong>nav</strong> element allows a user to go from one page to another.
                The <strong>main</strong> element is the content for the page. 
                The <strong>section</strong> element is to group the content. 
                Inside the section, there is an <strong>article</strong> element, which is like a subgroup.
                Next comes along <strong>figure</strong> elements, which allows media to be included.
                Last but not least, there is a <strong>footer</strong> element which may hold copyright info or owner's name.
            </p>
            <p>
                The <strong>anchor</strong> element can be used to navigate to different web pages or a specific location on the same page.
                If a user wanted the end user to go to a different page, the user can use the <strong>absolute URL</strong> in the anchor element.
                Not only that, but a <strong>relative URL</strong> can be used if the page is in the same directory as the current page.
                Last but not least, if a user wanted the end user to move to a specific location within the same page, an <strong>ID attribute</strong> can be used.
                The main differences between a navigation and text anchors are that a navigation anchor is a group of anchors that creates a “menu” or “tabs” to move from one place to another.
                On the other hand, text anchors are typically part of paragraphs for a concept or article to be easily accessed.
            </p>
        </article>
        <article>
            <h3 id="optimizing-images">Optimizing Images</h3>
            <p>
                There are six major specifications for images to be used on the internet. 
                The first specification is for the images to have a descriptive file name.
                If the image is not descriptive enough, the <strong>search engine optimization (SEO)</strong> will be very poor and would not be searchable.
                In retrospect, it helps the search engine bots to categorize the images for its users when they are searching for similar images.
                Second, the image should be reduced in size for the fastest load time. 
                Only use high resolution images if it is for high resolution devices. 
                Third, reduce the image size to fit the dimensions of the space on the web page.
                If the image is extremely large, the image will load very slowly and can reduce customer traction.
                Fourth, images should be in the correct file format in order to be viewed. 
                Most online photos are <strong>.JPG</strong>, line-art images are in <strong>.GIF</strong> or <strong>.PNG</strong>, and graphics with true transparency needs a 24-bit .PNG.
                Fifth, depending on the monitor, multiple images should be provided because different resolutions can render images differently.
                Lastly, the color mode for RGB is .PNG, .JPG, and <strong>.WebP</strong>. As for .GIF, it should be indexed. 
            </p>
            <p>
                As previously mentioned, photo specifications are typically .JPG.
                As for line-art, these are typically .GIF or 8-bit .PNG, and graphics with true transparency should be 24-bit .PNG.
            </p>
        </article>
        <article>
            <h3 id="cascading-stylesheets">Cascading Stylesheets</h3>
            <p>
                The main reasons to incorporate <strong>stylesheets</strong> in websites and apps is because it helps the web page to become visually pleasing to the eye.
                It allows visitors to keep coming back as long as it is readable and meets the brand's guidelines.
                Stylesheets can also set rules for <strong>media queries</strong>, which accommodates other devices such as tablets, laptops, desktop computers, etc. 
                These queries can help the developer improve the site and application accessibility and their responsiveness.
                Moreover, stylesheets alter multiple pages, which shows consistent styles and reduces redundant code.
                Since code is reduced, it is much more efficient and allows web pages to be loaded faster.
            </p>
            <p>
                There are many ways to incorporating style for a web page.
                One of the most efficient and preferred method is to externally link .CSS files in the global head area of the website.
                It can also be imported in the global stylesheet as well. 
                Some other options also include: embedded in the style tag, in an inline within an element using an attribute and value, and JavaScript template literals within a JavaScript function.
                Last but not least, it is possible in regular JavaScript, by manipulating the <strong>Document Object Model (DOM)</strong>.  
            </p>
        </article>
        <article>
            <h3 id="forms">Forms</h3>
            <p>
                The first major goal for <strong>accessible forms</strong> is to provide clear and concrete instructions above the form and in the labels.
                This allows users to visually see what they expect the values should be, since there are placeholder value examples shown on the screen.
                Second, allowing users to know why they are getting the data in order to submit a form. 
                It shows that which fields are optional and which fields are required.
                Third, setting the first field to autofocus allows users to type without using a keyboard.
                Fourth, ensure the form control can be filled out by using a keyboard.
                This allows for users who don't have a mouse or trackpad.
                Fifth, adding tab indexing to complex forms to clearly show which order of the fields should be filled.
                Lastly, ensuring validation messages are screen readable so that it is clear and legible because the built-in HTML browsers are not screen-readable.
            </p>
            <p>
                The major tags are form, label, fieldset, legend, input, select, text area, and button.
                The form tag has two important attributes, which are action and method.
                The action attribute specifies where the request from the form should be sent. 
                If this action was missing, then the form is submitted to the same URL from which it was downloaded. 
                The second attribute of the form tag is method, which specifies the HTTP method to be used in the HTTP request sent when the form is submitted.
                Label is another tag that helps the user to understand the purpose of their data entry. 
                The fieldset and legends are critical tags that help separate form controls into logical groups. 
                These groupings help the visually impaired, where fieldset has a default gray border with padding and the legend can have a prompt that help users understand the group's purpose.
                The input tag allows us to get user data within the form. 
                Within this input tag, the type attribute name changes how it is displayed and how it can be used. 
                In the type attribute, there are 22 different values that one can choose from. 
                Such value examples are checkbox, radio, email, and buttons. 
                Required is another significant attribute that allows users to provide critical responses. 
                Select with options is another tag that allows the user to select a choice in a drop-down list. 
                Textarea is an element that allows users to input multiple lines of text. 
                This is where a user can send more details and information. 
                The button is another element that requires a keyboard activation, a mouse click, a voice command, or even finger touch. 
                It is performed based on the action attribute that is specified. 
            </p>
            <p>
                The major form style recommendations to improve usability are form, fieldset, legend, label, input, select, options, and textarea.
                Adding borders, padding, color, and fonts can help improve the functionality and usability. 
            </p>
        </article>
        <article>
            <h3 id="express">Express</h3>
            <p>
                <strong>Node.js</strong> is an open source, cross-platform runtime environment for developing server-side and networking applications. 
                Moreover, Node.js is written in JavaScript which can be run within Node.js runtime. 
                Node provides a library of various JavaScript modules that simplify the development of web applications.
                <strong>Node Package Manager (npm)</strong> is the default package manager for JavaScript's runtime Node.js. 
                This package manager has a command line interface and an online repository that hosts JavaScript packages. 
                <strong>Express</strong> is a popular framework that provides <strong>application programming interface (API)</strong> of various common tasks that web applications need to do. 
                With this framework, we are able to get, post, and delete data, and also define the ports and routes the data will take. 
                Moreover, it can serve static files, such as the public folder, and build out responses.
                Lastly, we can handle the requests within the routing pipeline.
                With all three technologies together, we can simplify the web application process.  
            </p>
        </article>
        <article>
            <h3 id="javascript">JavaScript</h3>
            <p>
                The main data types in JavaScript are a number, a Boolean value (returns true or false), a string, a symbol, an object, and special values such as undefined and null.
                The number data type is a double-precision floating-point number.
                A Boolean value can be true or false and is recommended to be used in conditions.
                Strings are a data type that needs to be enclosed in by either a single quote or double quotes.
                If a string contains only characters, it is called string literals. 
                In addition, a string can contain expressions which are called template literals.
                A symbol is a primitive data type that can create object properties.
                Last but not least, there are two special values in JavaScript that indicates missing or absence of a value. 
            </p>
            <p>
                An object in JavaScript is a set of name-value pairs and is also called properties of the object. 
                In JavaScript, we can create, read, update, and delete properties of the object, which refers to <strong>CRUD</strong>.
                As for arrays, arrays are objects whose property names are strings such as 'FALL', 'WINTER', 'SPRING', etc. 
                For arrays, it is often used to access elements of an array by indexing. 
                <strong>JavaScript Object Notation (JSON)</strong> is a widely used format for exchanging data between applications. 
                JSON is useful because we can map an object in a program to a string, as well as creating an object in a program from a string.
                Thereby, allowing programs to exchange data very easily for many programming languages. 
            </p>
            <p>
                There are many conditionals and loops to choose from in JavaScript. 
                There are also if statements and switch statements, which are similar to if-then-else in other programming languages.
                Moreover, there are conditional operators that evaluate between two or more expressions. 
                A common conditional operator is by using let and is followed by if-then-else statements. 
                In general, when conditions contain values of any type, automatic conversion can happen, such as Boolean values.
                Therefore, we should code our conditions explicitly to true or false instead of automatic conversions. 
                As for loops, there are while, do while, for, for of, and for in loops. 
                In a while loop, the expression is evaluated and if it is true, then the body is executed.
                Otherwise, the loop ends.
                Do while loops is similar, but the expression is evaluated after the body has been executed. 
                In a for loop, the block executes a number of times. 
                The for of loop iterates over the elements of an iterable value, such as an array. 
                Lastly, the for in loop iterates over the properties of an object.
            </p>
            <p>
                <strong>Object-oriented programming</strong> is a style based on classes and objects. 
                A common way to think of it is like a blueprint of a building, and we create objects from a class. 
                Essentially, it is like a template. 
                With this object, an object can have an identity, state, and behavior. 
                An object has their own identity and is distinct from other objects.
                The state of an object has its own properties such as name, age, occupation. 
                As for behaviors, we can add a behavior to an object by adding properties whose values are functions.
            </p>
            <p>
                <strong>Functional programming</strong> uses functions as “first-class” values. 
                These functions can be assigned to variables, receive other functions as arguments, and even return functions from another function.
                This is known as higher-order functions. 
                Such example is the filter() method, where it applies a predicate function and returns an array containing only those elements of the array that returns true.
                By utilizing functional programming, code can be more modular and much more readable. 
            </p>
        </article>
        <article>
            <h3 id="dom">Document Object Model</h3>
            <p>
                <strong>Document Object Model (DOM)</strong> is a programming interface for many documents such as CSS, HTML, and XML. 
                Additionally, DOM provides APIs for manipulation and navigation of the document.
                But, why do developers update the DOM of a page using JavaScript and Express?
                It allows the developer to create responsive and interactive web applications.
                For example, when a user clicks on a button, the DOM can be updated to display some sort of image or text.
                With the manipulation of JavaScript and Express, one can manipulate the DOM of the page directly and dynamically without reloading the entire webpage.
                It will only update the portion of the page that needs to be updated and can be done so efficiently.
            </p>
        </article>
         </>
    );
}

export default TopicsPage;