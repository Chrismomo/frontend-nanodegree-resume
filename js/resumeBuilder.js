/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
	name: "Momo Hou",
	role: "Hola",
	contacts: {
		email: "xxxx@gmail.com",
		mobile: "123456",
		github: "chris-momo",
		location: "Beijing"
	},
	biopic: "images/momo.png",
	welcomeMessage: "Hi",
	skills: ["growth", "marketing", "programming"]
};


var work = {
	jobs: [
		{
			title: "data analysis & user growth",
			employer: "Keep",
			dates: "2017/05/31",
			location: "Beijing",
			description: "是一款具有社交属性的健身工具类产品。用户可以利用碎片化的时间，随时随地选择适合自己的健身课程进行真人同步训练。"
		},
		{
			title: "marketing",
			employer: "Uber",
			dates: "2015/07/22",
			location: "Beijing",
			description: "优步是一间交通网络公司，总部位于美国加利福尼亚州旧金山，以开发移动应用程序连结乘客和司机，提供载客车辆租赁及实时共乘的分享型经济服务。乘客可以通过发送短信或是使用移动应用程序来预约这些载客的车辆，利用移动应用程序时还可以追踪车辆的位置"
		}
	]	
};


var education = {
	school: [
		{
			name: "Beijing University of Post and Telecommunicatio",
			location: "Beijing",
			degree: "bachelor",
			dates: "2011/09/01",
			majors: ["Network Engineering"],
			url: "https:// www.baidu.com"
		},
		{
			name: "Beijing No.80 Hight School",
			location: "Beijing",
			degree: "high school",
			dates: "2008/09/01",
			majors: [],
			url: "https:// www.baidu.com"
		}
	],

	onlineCourses: [
		{
			title: "udacity",
			school: "R",
			dates: "2017/07/01",
			url: "http://cn.udacity.com/"
		},
		{
			title: "cousera",
			school: "user analysis",
			dates: "2016/08/01",
			url: "https://zh.coursera.org/"
		}
	]

};

var projects = {
	projects: [
		{
			 title: "UberArtStation",
			 dates: "2017/01/01",
			 description: "xixiixxixi",
			 images: ["images/project1a.jpg","images/project1b.jpg"]
		},
		{
			 title: "UberIcecream",
			 dates: "2015/07/24",
			 description: "xixiixxixi",
			 images: ["images/project2a.jpg","images/project2b.jpg"]
		}
	]
};


projects.display = function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDate);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0){
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}

}


function inName(name){
	var finalName = name;
    // Your code goes here!
    var names = name.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

work.display = function() {
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDate);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}


var formattedName = HTMLheaderName.replace("%data%", inName(bio.name));
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedName);
$("#header").append(formattedRole);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").append(formattedEmail);
$("#header").append(formattedMobile);

var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedbioPic);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#header").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#header").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#header").append(formattedSkill);
}


work.display();
projects.display();

$("#mapDiv").append(googleMap);


/*

 var awesomeThought = "I am Momo. I am awesome!";
 console.log(awesomeThought);

 var funThought = awesomeThought.replace("awesome", "fun");
 console.log(awesomeThought);
 console.log(funThought);

 var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
 var formattedLocation = HTMLworkLocation.replace("%data%", work.city);
 var formattedTitle = HTMLworkDates.replace("%data%", work.position);
 
 $("#workExperience").prepend(HTMLworkStart);
 $("#workExperience").append(formattedEmployer);
 $("#workExperience").append(formattedTitle);
 $("#workExperience").append(formattedLocation);


 var formattedSchool = HTMLschoolName.replace("%data%", education.school);
 var formattedMajor = HTMLschoolMajor.replace("%data%", education.major);
 var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.city);

 $("#education").prepend(HTMLschoolStart);
 $("#education").append(formattedSchool);
 $("#education").append(formattedMajor);
 $("#education").append(formattedSchoolLocation);

 */
