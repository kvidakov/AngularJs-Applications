/**
 * Created by KARLO on 30.11.2016..
 */

app.controller("loginCtrl", ["$scope", function ()
{
    function toggleSignIn() {
        if (!firebase.auth().currentUser) {
            // [START createprovider]
            var provider = new firebase.auth.FacebookAuthProvider();
            // [END createprovider]
            // [START addscopes]
            provider.addScope('user_birthday');
            // [END addscopes]
            // [START signin]
            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // [START_EXCLUDE]
                document.getElementById('quickstart-oauthtoken').textContent = token;
                // [END_EXCLUDE]
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // [START_EXCLUDE]
                if (errorCode === 'auth/account-exists-with-different-credential') {
                    alert('You have already signed up with a different auth provider for that email.');
                    // If you are using multiple auth providers on your app you should handle linking
                    // the user's accounts here.
                } else {
                    console.error(error);
                }
                // [END_EXCLUDE]
            });
            // [END signin]
        } else {
            // [START signout]
            firebase.auth().signOut();
            // [END signout]
        }
        // [START_EXCLUDE]
        document.getElementById('quickstart-sign-in').disabled = true;
        // [END_EXCLUDE]
    };
    // [END buttoncallback]

    function initApp() {
        // Listening for auth state changes.
        // [START authstatelistener]
        var hasUser = false;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                // [START_EXCLUDE]
                document.getElementById('quickstart-sign-in-status').textContent = 'Signed in as: ';
                document.getElementById('quickstart-sign-in').textContent = 'Log out';
                document.getElementById('aLinkforSingedProfile').textContent = displayName;
                //var newProfileImgElement = document.createElement("img");
                //newProfileImgElement.setAttribute("src", photoURL);
                //document.getElementById('quickstart-account-details').appendChild(newProfileImgElement);
                hasUser = true;
                // [END_EXCLUDE]
            } else {
                // User is signed out.
                // [START_EXCLUDE]

                if (hasUser)
                {
                    document.getElementById("aLinkforSingedProfile").textContent = "";
                    document.getElementsByClassName('quickstart-sign-in-status').textContent = "";
                    document.getElementById('quickstart-sign-in-status').textContent = "";
                    //document.getElementById('quickstart-account-details').textContent = "";
                    hasUser = false;
                }
                // [END_EXCLUDE]
            }
            // [START_EXCLUDE]
            document.getElementById('quickstart-sign-in').disabled = false;
            // [END_EXCLUDE]
        });
        // [END authstatelistener]
        document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
    };
    window.onload = function() {
        initApp();
    };

}]);


//app.controller("AppCtrl", function($scope, $state, $firebaseAuth, FirebaseService, Auth){
//    $scope.user = null;
//    $firebaseAuth.$onAuthStateChanged(function (firebaseUser)
//    {
//        if (firebaseUser){
//            console.log("Signed in as: ", firebaseUser);
//            $scope.user = firebaseUser;
//            FirebaseService.saveUser(firebaseUser.uid, firebaseUser.displayName, firebaseUser.photoURL);
//            Auth.saveUser(firebaseUser);
//        }
//        else {
//            console.log("Singed out");
//            $scope.user = null;
//        }
//    });
//    $scope.logout = function ()
//    {
//        $state.go("home");
//        Auth.removeUser();
//        $firebaseAuth().$signOut();
//    }
//});
