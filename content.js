function addHTMLToGmail() {
    // Create a new div element with your HTML content
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <div style="background-color: yellow; padding: 10px;">
      Your custom HTML content goes here.
      <button id="customButton">Click Me!</button>
    </div>
      <script>
        document.getElementById('customButton').addEventListener('click', function() {
          alert('Button was clicked!');
        });
      </script>
  `;
    
    const add = document.createElement('button');
    add.innerHTML = '<button id="btn">Click Me<button>'

    // Find an appropriate place to insert your new div
    const mainContent = document.querySelector('div[role="main"]');
    if (mainContent) {
        mainContent.insertBefore(newDiv, mainContent.firstChild);
        mainContent.insertBefore(add, mainContent.firstChild);

    }
  }
  
  function func() {
    alert("Hello! I am an alert box!");
  }
  
  // Execute the function when the page loads
  window.addEventListener('load', addHTMLToGmail);
  