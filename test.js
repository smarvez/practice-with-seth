console.log("What's your name?")
var stdin = process.openStdin();

var firstName = "";
var middleName = "";
var lastName = "";

stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that
    // with toString() and then trim()
    if (firstName === "") {
      firstName = d.toString().trim()
    } else if (middleName === "") {
      middleName = d.toString().trim()
    } else if (lastName === "") {
      lastName = d.toString().trim()
    }

    console.log("Hello " + firstName + " " + middleName + " " + lastName);

    if (middleName === "") {
      console.log("What's your middle name?")
    }
    else if (lastName === "") {
      console.log("What's your last name?")
    }
    else {
      process.exit(0);
    }

  });
