function login(arr) {
    //You will be given a string representing a username. The password will be that username reversed. Until you receive the correct password print on the console "Incorrect password. Try again.". When you receive the correct password print "User {username} logged in." However on the fourth try if the password is still not correct print "User {username} blocked!" and end the program. The input comes as an array of strings.

    //1)Trim off first array element that will be username
    //2)Define variable for reversed username string
    //3)Reverse username string -> for loop with loop back and decrement
    //4)Check if next array element is equal reversed username and breack loop or not
    //5)Check if iterations are 4 times and breack loop

    let username = arr.shift();
    //console.log(username)
    let reversedUsername = '';

    for (let i = username.length - 1; i >= 0; i--) {
        reversedUsername += username[i];
    }
    //console.log(usernameReversed)

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] !== reversedUsername) {
            if (i === 3) {
                console.log(`User ${username} blocked!`);
                break;
            }

            console.log('Incorrect password. Try again.');
        } else {
            console.log(`User ${username} logged in.`);
            break;
        }
    }
}

login(['Acer','login','go','let me in','recA']);    //Incorrect password. Try again. Incorrect password. Try again. Incorrect password. Try again. User Acer logged in.
login(['momo','omom']);    //User momo logged in.
login(['sunny','rainy','cloudy','sunny','not sunny', '11']);    //Incorrect password. Try again. Incorrect password. Try again. Incorrect password. Try again. User sunny blocked!
