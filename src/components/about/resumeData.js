import react from "react";

import insuline_img from "../codeProjects/assets/Insuline_1.png";
import saferoutes_img from "../codeProjects/assets/SafeRoutes_1.png";
import saltines_img from "../codeProjects/assets/Saltines_1.png";
import droom_img from "../codeProjects/assets/Droom_1.png";
import memefly_img from "../codeProjects/assets/Memefly_1.png";
import dont_die_img from "../codeProjects/assets/dont_Die_1.png";
import ncov_19 from "../codeProjects/assets/ncov19_thumbnail_2.png";

export const resumeData = {
	contact: {
		name: "Derek Etman",
		phone: "805 428 2682",
		email: "Dereketman@gmail.com",
		linkedIn: "www.linkedin.com/in/DerekEtman",
		personalWebsite: "Www.DerekEtman.com",
		gitHub: "www.github.com/DerekEtman",
	},
	skills: {
		coding: [
			"JavaScript",
			"CSS",
			" HTML 5",
			"React",
			"Redux",
			"Python",
			"Java",
			"Spring",
			"Jest",
			"Maven",
			"Tomcat",
			"GraphQL",
			"GIT",
		],
	},
	experience: [
		{
			jobTitle: "Media Specialist",
			companyName: "Chair Productions",
			employmentDate: " 2012 - Present",
			duties: [
				"Collaborated with multiple clients for over six years on various projects, which enhanced their recognition as an artist and speaker.",
				"Designed and created layouts for websites, tailored to the artist’s aesthetics.",
				"Increased artist's international seminars and lectures, based on the content created and developed, i.e. photos, graphics, presentation, and still being used.",
				"Edited and curated videos used to successfully showcase water for a non-profit initiative.",
				" Organized international project media to ensure future use: e.g. naming conventions, hierarchy, print ready, and easy layout.",
			],
		},
		{
			jobTitle: "Production Assistant",
			companyName: "Freelance",
			employmentDate: "Feb 2018 - Present",
			duties: [
				"Managed technical and administrative tasks, from running errands to distributing scripts, coordinating craft services and assisting with lighting and sound for studio and on-location shoots.",
				"Earned repeated praise from management and clients (including BaM Productions, Los York, Nike and Victoria Secret) for anticipating needs of executives, prioritizing tasks and ensuring successful execution of all productions.",
				"Relied on by directors, producers, set designers and stylists to source and locate obscure items, props and specialty talent for commercial shoots.",
			],
		},
		{
			jobTitle: "Media Creator and Developer",
			companyName: "The White Dress Play",
			employmentDate: "June 2017 - October 2017",
			duties: [
				"Developed and maintained “The White Dress” play website at an effective cost and turned around the request promptly.",
				"Arranged and scheduled photo-shoots that ran smoothly; quickly resolved ad hoc issues with technical, talent, and schedules.",
				"Proactively Created and designed layouts for web and print media within tight deadlines to ensure that the customers meet their timelines.",
			],
		},
		{
			jobTitle: "Head of Sound & Music, Founding Partner",
			companyName: "Model 05 Productions",
			employmentDate: "May 2015 - April 2017",
			duties: [
				"Managed 15-plus projects from client idea to designed and executed finished projects, shows, and/or commercials which extended from a month to up to a year.",
				"Clients appreciated resourcefulness and timely delivery due to design, style, and creative approaches.",
				"Sole company resource for directing sound, music, and ADR on all projects.",
				"Researched and contracted external support when required.",
				"Created system to effectively manage 25 terabytes, of customer content, to quickly retrieve relevant information and maintain quality / integrity of files.",
				"Researched and approved all required project equipment purchases, remaining within budget.",
			],
		},
		{
			jobTitle: "Assistant Recording Engineer",
			companyName: "SoundMind Industries",
			employmentDate: "August 2011 - January 2014",
			duties: [
				"Voluntary 6-month internship based on professor’s recommendation, promoted to full team member: focused on recorded Automated Dialog Replacement (ADR), instruments, and vocals set-up.",
				"Independently and effectively managed audio files for mixed tracks, vocals, and sound effects based on self-study of various manuals and resource material.",
				"lients valued properly set-up equipment, anticipated their needs, and fully stocked and prepped studio for their recording sessions.",
				"Enhanced audio quality via manual editing and cleaning techniques, following lead requirements (no software available).",
			],
		},
		{
			jobTitle: "Composer/ Assistant Recording Engineer",
			companyName: "Global Media Entertainment Group, LLC",
			employmentDate: "August 2011 - May 2013",
			duties: [
				"Used and learned technology platform related to my interest in audio and music.",
				"Applied design aesthetic by creating company logo and hospitality catalog.",
				"Independently and effectively completed many team assigned scheduling, reporting, and ad hoc tasks.",
			],
		},
		{
			jobTitle: "Senior Intern",
			companyName: "Global Media Entertainment Group, LLC",
			employmentDate: "August 2011 - January 2014",
			duties: [
				"Used and learned technology platform related to my interest in audio and music.",
				"Applied design aesthetic by creating company logo and hospitality catalog.",
				"Independently and effectively completed many team assigned scheduling, reporting, and ad hoc tasks.",
			],
		},
	],
	education: [
		{
			schoolName: "Lambda School",
			programTitle: "Full Stack Developer",
			enrollmentDate: "2019-2020",
			infoAboutProgram: [
				"Training in all of the following: React, React Native, Redux, Java, Spring, Maven, Swagger, Jest, PostGresSQL , SQL, Python, and more.",
				"Utilized agile software development and Git workflow on all projects ( daily projects as well as large monthly group projects during Lambda buildweek)",
				"Hands-on experiences with server and client testing.",
				"Wrote production-ready code using ReactJS, Redux, CSS for frontend and Java Spring for backend to build single page applications.",
			],
		},
		{
			schoolName: "California Institute of the Arts",
			programTitle: "Bachelor's Degree, Music Theory and Composition",
			enrollmentDate: "2013 - 2016",
			infoAboutProgram: [
				"Students proceed from foundation studies in composition, experimental sound practices, theory, technology and professional development, and go on to create a portfolio of original work—all the while cultivating their own distinctive artistic profiles. All BFA candidates in Composition and Experimental Sound Practices studies are required to pass a Graduation Portfolio Review in order to obtain the BFA degree.",
				"Composition for Film and Video affords a technical and aesthetic foundation for students who wish to collaborate with film and video artists.",
			],
		},
		{
			schoolName: "Ventura College",
			programTitle: "Full Stack Developer",
			enrollmentDate: "A.A. Music Theory and Composition",
			infoAboutProgram: [""],
		},
		{
			schoolName: "Ventura College",
			programTitle: "Full Stack Developer",
			enrollmentDate: "A.A. Liberal Arts and Sciences, General Studies and Humanities",
			infoAboutProgram: [""],
		},
	],
	projects:[
			{
				id: 0,
				thumb_nail: memefly_img,
				name: "MemeFlyAi",
				project_brief:
					"Collaborated with a Data Science team to create a website for a Neural Network Meme generator.",
				project_info: [
					"• Collaborated with a Data Science team to create a website for a Neural Network Meme generator.",
					"• Worked on a team of six developers to create a fully authenticated online image text editor, backed by MongoDB, with a React and FabricJS frontend.",
					"• Handled delegation of tasks and breakdown of product releases over a 2+ month period.",
				],
				tech_stack: [],
				project_url: "https://memeflyreboot.netlify.app",
				git_repo: "https://github.com/Lambda-School-Labs/memefly-fe.git",
			},
			{
				id: 1,
				thumb_nail: saferoutes_img,
				name: "SafeRoutes",
				project_brief:
					"Collaborated with a Data Science team to create a website that compiled and displayed the most dangerous intersections in Los Angeles.",
				project_info: [
					"• Collaborated with a Data Science team to create a website that compiled and displayed the most dangerous intersections in Los Angeles.",
					"• Built and deployed a Java application using Spring framework API following the REST architectural pattern with OAuth2 authentication.",
					"• Migrated from H2 to PostGres using a seeding script to generate default data.",
					"• Created user docs with swagger.",
					"• Ensured stable code using JUnit to write unit tests.",
				],
				tech_stack: [],
				project_url: "https://front-end.pedroprieto.now.sh/",
				git_repo: "https://github.com/Safe-Routes-Finders/Back-End",
			},
			{
				id: 2,
				thumb_nail: insuline_img,
				name: "Insuline",
				project_brief:
					"Collaborated with a Data Science team to create a blood glucose predictor for diabetics.",
				project_info: [
					"• Collaborated with a Data Science team to create a blood glucose predictor for diabetics.",
					"• Represented the front end web team that consisted of two Senior. Developers in daily meetings.",
					"• Designed website and logo, mocked out and helped to implement the UX/UI of the application.",
					"• Helped build React website with oAuth2 authentication, using Formik to create login and registration forms.",
					"• Ensured routes were properly installed to show top level pages as well as nested views.",
					"• Proposed and built out food nutrition finder based on USFDA nutrition API.",
				],
				tech_stack: [],
				project_url: "https://insuline-diabetes.netlify.app/",
				git_repo: "https://github.com/Build-Week-Diabetes-Manager",
			},
			{
				id: 3,
				thumb_nail: saltines_img,
				name: "Saltines - A Hacker News, Saltiest Message Ranker",
				project_brief:
					"Collaborated with a Data Science team who used machine learning on user comments from the website Hacker News to rank how negative the comments were.",
				project_info: [
					"• Collaborated with a Data Science team who used machine learning on user comments from the website Hacker News to rank how negative the comments were.",
					"• Designed website and graphics, mocked out full UX and UI of the application.• Worked with a team of three junior front end engineers to build a React front end, using Redux for global state management, and the new React Hooks API.",
					"• Collaborated with a Data Science team who used machine learning on user comments from the website Hacker News to rank how negative the comments were.",
					"• Designed website and graphics, mocked out full UX and UI of the application.",
					"• Worked with a team of three junior front end engineers to build a React front end, using Redux for global state management, and the new React Hooks API.",
					"• Established deployment schedule for project and took lead of all junior front end engineers; delegated tasks, handled team disputes, pair programmed to help overcome blockers.",
					"• Established deployment schedule for project and took lead of all junior front end engineers; delegated tasks, handled team disputes, pair programmed to help overcome blockers.",
				],
				tech_stack: [],
				project_url: "https://saltines.now.sh/",
				git_repo: "https://github.com/saltiest-hacker-news-comments/FE-work",
			},
			{
				id: 4,
				thumb_nail: droom_img,
				name: "Droom",
				project_brief: "Designed marketing website and logo for job search website.",
				project_info: [
					"• Designed marketing website and logo for job search website.",
					"• Used less and flex box to create animations.",
					"• Laid out fully responsive website for desktop, tablet, and mobile use.",
				],
				tech_stack: [],
				project_url: "https://droom2019.netlify.com/",
				git_repo: "https://github.com/build-week-droom/Droom-UI",
			},
			{
				id: 5,
				thumb_nail: dont_die_img,
				name: "Dont Die - The Game",
				project_brief:
					"Build an interactive Multi-User Dungeon (MUD) client and server",
				project_info: [
					"• Designed Website, character, and game map.",
					"• Learned and deployed server using Django Framework.",
					"•Connected server to Dont Die Client",
				],
				tech_stack: [],
				project_url: "https://droom2019.netlify.com/",
				git_repo: "https://github.com/build-week-droom/Droom-UI",
			},
			{
				id: 5,
				thumb_nail: ncov_19,
				name: "Ncov19.us",
				project_brief:
					"Real time Covid-19 dashboard, With mapped country, state, and county data. As well as drive through testing locations.",
				project_info: [
					"• Worked with a team of 30 + web devs and data engineers to build one location for US based covid 19 information.",
					"• Worked with UX to style dashboard in accordance with Figma design.",
				],
				tech_stack: ["python", "react", "dash bootstrap", ],
				project_url: "http://ncov19.us",
				git_repo: "https://github.com/ncov19-us/front-end",
			}
		]
};
