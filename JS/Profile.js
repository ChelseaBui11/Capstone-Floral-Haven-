document.addEventListener('DOMContentLoaded', function() {
    const profileButton = document.getElementById('profileButton');

    profileButton.addEventListener('click', function(event) {
        event.preventDefault();

        // Check if user is logged in
        const isLoggedIn = checkLoggedIn();

        if (isLoggedIn) {
            window.location.href = '../../profile/profile.html'; 
            window.location.href = '../../profile/guestprofile.html'; 
        }
    });

    function checkLoggedIn() {
        return sessionStorage.getItem('loggedInUser') !== null;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logoutbtn');

    logoutButton.addEventListener('click', function(event) {
        event.preventDefault();

        // Clear session storage to log out the user
        sessionStorage.removeItem('loggedInUser');
        
        // Redirect to the home page
        window.location.href = '../home/index.html';
    });
});
