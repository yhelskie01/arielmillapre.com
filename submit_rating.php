<center><div id="myModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <div class="container">
    
         <h2>Millapre.netlify.app</h2>
    
    
    <div class="overflow-box">
<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the rating from the form
    $rating = isset($_POST['rating']) ? intval($_POST['rating']) : 0;

    $to = "arielmillapre@gmail.com"; // Replace with your email address

    
    
    
        
    echo "Thank you for your rating of " . $rating . " star😊"; 
} else {
    echo "No rating submitted.";
}
?> </center>
</div>
</div>
</div>
