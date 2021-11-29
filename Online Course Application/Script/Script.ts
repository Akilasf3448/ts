let UserIdAutoIncrement = 1000;
let CourseIdAutoIncrement =100;
let UserName: string;
let UserAge: number;
let MobileNumber : number;
let CourseName : string;
let RequiredDays : number;



class UserDetails{
    UserId :string;
    UserName : string;
    UserAge: number;
    MobileNumber : number;

  
    constructor(userName: string , userAge : number , userMobileNumber: number)
    {
        UserIdAutoIncrement++;
        this.UserId="OCA" + UserIdAutoIncrement.toString();
        this.UserName=userName;
        this.UserAge=userAge;
        this.MobileNumber=userMobileNumber;
    }
}
let UserList : Array<UserDetails> = new Array<UserDetails>();

class EnrolledDetails{
    CourseName : string;
    CourseId : string;
    RequiredDays : number;
    UserId : string;

    constructor( courseName : string , requiredDays : number )
    {
        CourseIdAutoIncrement++;
        this.CourseId="CN" + CourseIdAutoIncrement.toString();
        this.CourseName=courseName;
        this.RequiredDays=requiredDays;
        this.UserId=this.UserId;
    }

}
let EnrolledList : Array<EnrolledDetails> = new Array<EnrolledDetails>();

function homePage()
{
    let userBlock=document.getElementById("main")as HTMLDivElement;
    userBlock.style.display="block";
    let newUser = document.getElementById("newUser")as HTMLDivElement;
    newUser.style.display="none";
    let existingUser = document.getElementById("existingUser")as HTMLDivElement;
    existingUser.style.display="none";
    let options = document.getElementById("options")as HTMLDivElement;
    options.style.display="none";
    let availableCourse = document.getElementById("availableCourse")as HTMLDivElement;
    availableCourse.style.display="none";
    let EnrolledCourse = document.getElementById("EnrolledCourse")as HTMLDivElement;
    EnrolledCourse.style.display="none";
}

function newUser()
{
    let userBlock=document.getElementById("main")as HTMLDivElement;
    userBlock.style.display="none";
    let newUser = document.getElementById("newUser")as HTMLDivElement;
    newUser.style.display="block";
    let existingUser = document.getElementById("existingUser")as HTMLDivElement;
    existingUser.style.display="none";
    let options = document.getElementById("options")as HTMLDivElement;
    options.style.display="none";
    let availableCourse = document.getElementById("availableCourse")as HTMLDivElement;
    availableCourse.style.display="none";
    let EnrolledCourse = document.getElementById("EnrolledCourse")as HTMLDivElement;
    EnrolledCourse.style.display="none";

}

function existingUser()
{
    let userBlock=document.getElementById("main")as HTMLDivElement;
    userBlock.style.display="none";
    let newUser = document.getElementById("newUser")as HTMLDivElement;
    newUser.style.display="none";
    let existingUser = document.getElementById("existingUser")as HTMLDivElement;
    existingUser.style.display="block";
    let options = document.getElementById("options")as HTMLDivElement;
    options.style.display="none";
    let availableCourse = document.getElementById("availableCourse")as HTMLDivElement;
    availableCourse.style.display="none";
    let EnrolledCourse = document.getElementById("EnrolledCourse")as HTMLDivElement;
    EnrolledCourse.style.display="none";
     
    

    
}

function options()
{
    let id=(document.getElementById("userId")as HTMLInputElement).value;
    for(var i=0 ;i<=UserList.length ;i++)
    {
       if(id==UserList[i].UserId)
       {
        let userBlock=document.getElementById("main")as HTMLDivElement;
        userBlock.style.display="none";
        let newUser = document.getElementById("newUser")as HTMLDivElement;
        newUser.style.display="none";
        let existingUser = document.getElementById("existingUser")as HTMLDivElement;
        existingUser.style.display="none";
        let options = document.getElementById("options")as HTMLDivElement;
        options.style.display="block";
        let availableCourse = document.getElementById("availableCourse")as HTMLDivElement;
        availableCourse.style.display="none";
        let EnrolledCourse = document.getElementById("EnrolledCourse")as HTMLDivElement;
        EnrolledCourse.style.display="none";
       }
      
    }

   
   
}

function availableCourse()
{
    

    let userBlock=document.getElementById("main")as HTMLDivElement;
    userBlock.style.display="none";
    let newUser = document.getElementById("newUser")as HTMLDivElement;
    newUser.style.display="none";
    let existingUser = document.getElementById("existingUser")as HTMLDivElement;
    existingUser.style.display="none";
    let options = document.getElementById("options")as HTMLDivElement;
    options.style.display="none";
    let availableCourse = document.getElementById("availableCourse")as HTMLDivElement;
    availableCourse.style.display="block";
    let EnrolledCourse = document.getElementById("EnrolledCourse")as HTMLDivElement;
    EnrolledCourse.style.display="none";

    
}

function EnrolledCourse()
{ 
    

    let userBlock=document.getElementById("main")as HTMLDivElement;
    userBlock.style.display="none";
    let newUser = document.getElementById("newUser")as HTMLDivElement;
    newUser.style.display="none";
    let existingUser = document.getElementById("existingUser")as HTMLDivElement;
    existingUser.style.display="none";
    let options = document.getElementById("options")as HTMLDivElement;
    options.style.display="none";
    let availableCourse = document.getElementById("availableCourse")as HTMLDivElement;
    availableCourse.style.display="none";
    let EnrolledCourse = document.getElementById("EnrolledCourse")as HTMLDivElement;
    EnrolledCourse.style.display="block";
}

 function add()
{
    var name=(document.getElementById("name") as HTMLInputElement).value;
    var age=(document.getElementById("age") as HTMLInputElement).value;
    var mobileNumber=(document.getElementById("mobileNumber") as HTMLInputElement).value;
  
    let userObject=new UserDetails(name, +age ,+ mobileNumber);
    UserList.push(userObject);
    let userid=userObject.UserId;
    alert(`Register Successfully`);
    alert(`Your ID Number is ` +userid);
    
   

    let userBlock=document.getElementById("main")as HTMLDivElement;
    userBlock.style.display="block";
    let newUser = document.getElementById("newUser")as HTMLDivElement;
    newUser.style.display="none";
    let existingUser = document.getElementById("existingUser")as HTMLDivElement;
    existingUser.style.display="none";
    let options = document.getElementById("options")as HTMLDivElement;
    options.style.display="none";
    let availableCourse = document.getElementById("availableCourse")as HTMLDivElement;
    availableCourse.style.display="none";
    let EnrolledCourse = document.getElementById("EnrolledCourse")as HTMLDivElement;
    EnrolledCourse.style.display="none";
}

function enrolled()
{
    let selectedCourse=(document.getElementById("courseName")as HTMLSelectElement).value;
    
    let requiredDays = (document.getElementById("requiredDays")as HTMLInputElement).value;
    let enrollObject = new EnrolledDetails(selectedCourse,+requiredDays  );
    EnrolledList.push(enrollObject);
    let courseid=enrollObject.CourseId;
   
    alert(`Enroll Successfully`);
    alert (`selected course  : ` +selectedCourse + ` ` +`Your Course ID Number is `+courseid  );
    alert( `Required Days to complete  the course :`  +requiredDays)
    
    let userBlock=document.getElementById("main")as HTMLDivElement;
    userBlock.style.display="none";
    let newUser = document.getElementById("newUser")as HTMLDivElement;
    newUser.style.display="none";
    let existingUser = document.getElementById("existingUser")as HTMLDivElement;
    existingUser.style.display="none";
    let options = document.getElementById("options")as HTMLDivElement;
    options.style.display="block";
    let availableCourse = document.getElementById("availableCourse")as HTMLDivElement;
    availableCourse.style.display="none";
    let EnrolledCourse = document.getElementById("EnrolledCourse")as HTMLDivElement;
    EnrolledCourse.style.display="none";

    
}

function show()
{
    for(let i=0 ; i<=EnrolledList.length ; i++)
    {
        let display=document.getElementById("label")as HTMLLabelElement;
        display.innerHTML += `Course Details : ${EnrolledList[i].CourseName} ${EnrolledList[i].CourseId} ${EnrolledList[i].RequiredDays} ${EnrolledList[i].UserId}<br>`;
       
    }
}
