function showContent(component) {
    var contentDiv = document.getElementById("content");
    var componentId = component.id;
    var content = "";

    switch (componentId) {
        case "home":
            content = "<h2>Welcome to the Home Page</h2>";
            break;
        case "contact":
            content = "<h2>Contact Information</h2><p>Name:Sankar Patra<br><p>Phone:9178702944<br>Email: sankarpatra573@gmail.com</p>";
            break;
        case "information":
            content = "<h2>Information</h2><p>Hi, my name is Sankar Patra and I'm a Fresh Graduate based in Odisha. I have a passion for Coading and I love to learn new Technologies. With 6 month of Internship experience in Front-end Development, I have worked on a variety of projects, ranging from E-commerce to Music Clone. I am skilled in Front-end Development and ReactJS Development. When I'm not working, you can find me Singing Song or spending time with Social Media.</p>";
            break;
        case "guide":
            content = "<h2>User Guide</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>";
            break;
    }

    contentDiv.innerHTML = content;
}

var components = document.getElementsByClassName("component");
for (var i = 0; i < components.length; i++) {
    components[i].addEventListener("click", function() {
        showContent(this);
    });
}
