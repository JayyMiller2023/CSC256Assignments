// Function to handle when you click the submit button
document.getElementById("submitButton").addEventListener("click", function() {
    // Variables to store User's input
    // Username Variable
    let username = document.getElementById("username").value;
    // Points Total Variable
    let pointsTotal = document.getElementById("pointsTotal").value;
    // Health/Damage Variable
    let healthDamage = document.getElementById("healthDamage").value;
    // Weapon Variable
    let weapon = document.getElementById("weapon").value;

    // Displaying information in their respective divs
    // Username Div
    document.getElementById("Username").textContent="Username: "+username;
    // Points Total Div
    document.getElementById("PointsTotal").textContent="Points Total: "+pointsTotal;
    // Health/Damage Div
    document.getElementById("HealthDamage").textContent="Health/Damage: "+healthDamage;
    // Weapon Div
    document.getElementById("Weapon").textContent="Weapon: "+ weapon;
})