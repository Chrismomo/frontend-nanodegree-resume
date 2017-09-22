/*
This is empty on purpose! Your code to build the resume will go here.
 */

function inName(name){
	var finalName = name;
    // Your code goes here!
    var names = name.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}


var bio = {
	name: "Momo Hou",
	role: "Hola",
	contacts: {
		email: "chris-momo@hotmail.com",
		mobile: "123-456-78900",
		github: "chris-momo",
		location: "Beijing"
	},
	biopic: "images/momo.png",
	welcomeMessage: "Hola",
	skills: ["data analysis", "user growth", "design"]
};


bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", inName(bio.name));
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts:last").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

	var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedbioPic);

	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(skill){
		var formattedSkill = HTMLskills.replace("%data%", skill);
		$("#skills").append(formattedSkill);
	});

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#footerContacts:last").append(formattedMobile);
	$("#footerContacts:last").append(formattedEmail);
	$("#footerContacts:last").append(formattedGithub);
	$("#footerContacts:last").append(formattedLocation);

}

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
			title: "marketing & growth",
			employer: "Uber",
			dates: "2015/07/22",
			location: "Beijing",
			description: "优步是一间交通网络公司，总部位于美国加利福尼亚州旧金山，以开发移动应用程序连结乘客和司机，提供载客车辆租赁及实时共乘的分享型经济服务。乘客可以通过发送短信或是使用移动应用程序来预约这些载客的车辆，利用移动应用程序时还可以追踪车辆的位置"
		}
	]	
};


work.display = function() {
	for(var job = 0; job < work.jobs.length; job++){
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


var education = {
	schools: [
		{
			name: "Beijing University of Post and Telecommunication",
			location: "Beijing",
			degree: "bachelor",
			dates: "2011/09/01",
			majors: ["Network Engineering", "Computer Science"],
			url: "http://www.bupt.edu.cn/"
		}
	],

	onlineCourses: [
		{
			title: "R",
			school: "udacity",
			dates: "2017/07/01",
			url: "http://cn.udacity.com/"
		},
		{
			title: "user analysis",
			school: "cousera",
			dates: "2016/08/15",
			url: "https://zh.coursera.org/"
		}
	]

};

education.display = function(){
	for(var school = 0; school < education.schools.length; school++){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:before").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);

		for(var major = 0; major <education.schools[school].majors.length; major++){
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
	}

	 $(".education-entry:last").append(HTMLonlineClasses);

	 education.onlineCourses.forEach(function(element){
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", element.school);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", element.title);
		var formattedOnlineDates = HTMLonlineTitle.replace("%data%", element.dates);
		var formattedOnlineURL = HTMLonlineTitle.replace("%data%", element.url);
		$(".education-entry:last").append(formattedOnlineTitle);
		$(".education-entry:last").append(formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	 });
}

var projects = {
	projects: [
		{
			 title: "UberArtStation",
			 dates: "2017/01/01",
			 description: "xixiixxixi",
			 images: ["images/project1a.jpg","images/project1b.jpg"]
		},
		{
			 title: "UberIcecream Beijing",
			 dates: "2015/07/24",
			 description: "xixiixxixi",
			 images: ["images/project2a.jpg","images/project2b.jpg"]
		}
	]
};


projects.display = function(){
	for(var project = 0; project < projects.projects.length; project++){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDate);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0){
			for(var image = 0; image < projects.projects[project].images.length; image++){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}



bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

