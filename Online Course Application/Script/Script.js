var UserIdAutoIncrement = 1000;
var CourseIdAutoIncrement = 100;
var UserName;
var UserAge;
var MobileNumber;
var CourseName;
var RequiredDays;
var UserDetails = /** @class */ (function () {
    function UserDetails(userName, userAge, userMobileNumber) {
        UserIdAutoIncrement++;
        this.UserId = "OCA" + UserIdAutoIncrement.toString();
        this.UserName = userName;
        this.UserAge = userAge;
        this.MobileNumber = MobileNumber;
    }
    return UserDetails;
}());
var UserList = new Array();
var EnrolledDetails = /** @class */ (function () {
    function EnrolledDetails(courseName, requiredDays) {
        CourseIdAutoIncrement++;
        this.CourseId = "CN" + CourseIdAutoIncrement.toString();
        this.CourseName = courseName;
        this.RequiredDays = requiredDays;
        this.UserId = this.UserId;
    }
    return EnrolledDetails;
}());
var EnrolledList = new Array();
function homePage() {
    var userBlock = document.getElementById("main");
    userBlock.style.display = "block";
    var newUser = document.getElementById("newUser");
    newUser.style.display = "none";
    var existingUser = document.getElementById("existingUser");
    existingUser.style.display = "none";
    var options = document.getElementById("options");
    options.style.display = "none";
    var availableCourse = document.getElementById("availableCourse");
    availableCourse.style.display = "none";
    var EnrolledCourse = document.getElementById("EnrolledCourse");
    EnrolledCourse.style.display = "none";
}
function newUser() {
    var userBlock = document.getElementById("main");
    userBlock.style.display = "none";
    var newUser = document.getElementById("newUser");
    newUser.style.display = "block";
    var existingUser = document.getElementById("existingUser");
    existingUser.style.display = "none";
    var options = document.getElementById("options");
    options.style.display = "none";
    var availableCourse = document.getElementById("availableCourse");
    availableCourse.style.display = "none";
    var EnrolledCourse = document.getElementById("EnrolledCourse");
    EnrolledCourse.style.display = "none";
}
function existingUser() {
    var userBlock = document.getElementById("main");
    userBlock.style.display = "none";
    var newUser = document.getElementById("newUser");
    newUser.style.display = "none";
    var existingUser = document.getElementById("existingUser");
    existingUser.style.display = "block";
    var options = document.getElementById("options");
    options.style.display = "none";
    var availableCourse = document.getElementById("availableCourse");
    availableCourse.style.display = "none";
    var EnrolledCourse = document.getElementById("EnrolledCourse");
    EnrolledCourse.style.display = "none";
}
function options() {
    var id = document.getElementById("userId").value;
    for (var i = 0; i <= UserList.length; i++) {
        if (id == UserList[i].UserId) {
            var userBlock = document.getElementById("main");
            userBlock.style.display = "none";
            var newUser_1 = document.getElementById("newUser");
            newUser_1.style.display = "none";
            var existingUser_1 = document.getElementById("existingUser");
            existingUser_1.style.display = "none";
            var options_1 = document.getElementById("options");
            options_1.style.display = "block";
            var availableCourse_1 = document.getElementById("availableCourse");
            availableCourse_1.style.display = "none";
            var EnrolledCourse_1 = document.getElementById("EnrolledCourse");
            EnrolledCourse_1.style.display = "none";
        }
    }
}
function availableCourse() {
    var userBlock = document.getElementById("main");
    userBlock.style.display = "none";
    var newUser = document.getElementById("newUser");
    newUser.style.display = "none";
    var existingUser = document.getElementById("existingUser");
    existingUser.style.display = "none";
    var options = document.getElementById("options");
    options.style.display = "none";
    var availableCourse = document.getElementById("availableCourse");
    availableCourse.style.display = "block";
    var EnrolledCourse = document.getElementById("EnrolledCourse");
    EnrolledCourse.style.display = "none";
}
function EnrolledCourse() {
    var userBlock = document.getElementById("main");
    userBlock.style.display = "none";
    var newUser = document.getElementById("newUser");
    newUser.style.display = "none";
    var existingUser = document.getElementById("existingUser");
    existingUser.style.display = "none";
    var options = document.getElementById("options");
    options.style.display = "none";
    var availableCourse = document.getElementById("availableCourse");
    availableCourse.style.display = "none";
    var EnrolledCourse = document.getElementById("EnrolledCourse");
    EnrolledCourse.style.display = "block";
}
function add() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var userObject = new UserDetails(name, +age, +mobileNumber);
    UserList.push(userObject);
    var userid = userObject.UserId;
    alert("Register Successfully");
    alert("Your ID Number is " + userid);
    var userBlock = document.getElementById("main");
    userBlock.style.display = "block";
    var newUser = document.getElementById("newUser");
    newUser.style.display = "none";
    var existingUser = document.getElementById("existingUser");
    existingUser.style.display = "none";
    var options = document.getElementById("options");
    options.style.display = "none";
    var availableCourse = document.getElementById("availableCourse");
    availableCourse.style.display = "none";
    var EnrolledCourse = document.getElementById("EnrolledCourse");
    EnrolledCourse.style.display = "none";
}
function enrolled() {
    var selectedCourse = document.getElementById("courseName").value;
    var requiredDays = document.getElementById("requiredDays").value;
    var enrollObject = new EnrolledDetails(selectedCourse, +requiredDays);
    EnrolledList.push(enrollObject);
    var courseid = enrollObject.CourseId;
    alert("Enroll Successfully");
    alert("selected course  : " + selectedCourse + " " + "Your Course ID Number is " + courseid);
    alert("Required Days to complete  the course :" + requiredDays);
    var userBlock = document.getElementById("main");
    userBlock.style.display = "none";
    var newUser = document.getElementById("newUser");
    newUser.style.display = "none";
    var existingUser = document.getElementById("existingUser");
    existingUser.style.display = "none";
    var options = document.getElementById("options");
    options.style.display = "block";
    var availableCourse = document.getElementById("availableCourse");
    availableCourse.style.display = "none";
    var EnrolledCourse = document.getElementById("EnrolledCourse");
    EnrolledCourse.style.display = "none";
}
function show() {
    for (var i = 0; i <= EnrolledList.length; i++) {
        var display = document.getElementById("label");
        display.innerHTML += "Course Details : ".concat(EnrolledList[i].CourseName, " ").concat(EnrolledList[i].CourseId, " ").concat(EnrolledList[i].RequiredDays, " ").concat(EnrolledList[i].UserId, "<br>");
    }
}
