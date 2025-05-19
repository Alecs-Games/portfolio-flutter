import 'package:flutter/material.dart';
import 'pages/home.dart';
import 'pages/project.dart';
import 'widgets/hero_card.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Project Navigation App',
      theme: ThemeData(primarySwatch: Colors.blue),
      initialRoute: '/home',
      routes: {
        '/home': (context) => HomePage(),
        '/project1':
            (context) => ProjectPage(
              title: "Enhanced Expressive Technology Studio Demonstration",
              date: "Mar 2025 - Present",
              affiliation:
                  "California Polytechnic State University-San Luis Obispo",
              description:
                  "Implement user-centered design to create, test, and revise a new demonstration of Cal Poly’s Expressive Technologies Studio for donors and guests. Improved visual fidelity by converting existing scenes and shader graphs to High Definition Render Pipeline. Consult with diverse teams and stakeholders to iterate on a cross-disciplinary studio demonstration incorporating motion capture, 3D sound, animatronics, and programmed theatrical lighting.",
              skills: "Unity",
              images: [
                HeroLayoutCard(
                  image:
                      "https://content-calpoly-edu.s3.amazonaws.com/laes/1/images/ETS-Images/F2023_Frost-Center_ETS-2-995x664.jpg",
                  title: "",
                  details: "",
                  embed:
                      "https://www.youtube.com/embed/2YgRU_uiis8?si=hU4fZN7xP91mihxc",
                  embedWidth: 1024,
                  embedHeight: 596,
                  embedAllow:
                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                  embedDetails: "",
                ),
              ],
            ),
        '/project2':
            (context) => ProjectPage(
              title: "Veterinary Simulation",
              date: "Sep 2024 - Present",
              affiliation:
                  "California Polytechnic State University-San Luis Obispo",
              description:
                  "Develop an immersive and accurate Unity simulation to safely train veterinary students on anesthesia, connecting to an online suite of instructor and student tools. Apply Scrum project management to establish technical specifications and requirements in an ongoing dialogue with clients. Support future growth with a modular design allowing additional veterinary scenarios and operations. Ensure a consistent experience with user testing across web and mobile platforms.",
              skills: "Unity · Scrum · Agile Project Management",
              images: List.empty(),
            ),
        '/project3':
            (context) => ProjectPage(
              title: "Bungus Productions",
              date: "Jun 2017 - Present",
              affiliation: "",
              description:
                  "This website contains video games I have made or contributed to throughout high school and college. Game development has always been and will continue to be a passion of mine and, whether it is a hobby or a career, I want to use the experience I have gained from these projects to make the best games I can.",
              skills: "Unity · Game Design",
              images: [],
            ),
        '/project4':
            (context) => ProjectPage(
              title: "VR Pier Project",
              date: "Sep 2024 - Dec 2024",
              affiliation:
                  "California Polytechnic State University-San Luis Obispo",
              description:
                  "Provided an avenue to boost interest in the scientific diving program by designing and assembling a Unity interface for an interactive virtual reality experience. Enhanced user immersion by integrating 360-degree video and an interactive 3D environment with educational content. Guided tasks as Scrum Liaison and communicated with stakeholders across multiple departments to narrow down the needs of the software.",
              skills:
                  "Unity · Agile Project Management · Scrum · Virtual Reality (VR)",
              images: List.empty(),
            ),
        '/project5':
            (context) => ProjectPage(
              title: "MIPS Debugger",
              date: "Apr 2023 - Jun 2023",
              affiliation:
                  "California Polytechnic State University-San Luis Obispo",
              description:
                  "A command-line debugger written in Java with an eye for simplicity and educational use and extendability in the source code.",
              skills: "Software Development · Java · Computer Architecture",
              images: List.empty(),
            ),
        '/project6':
            (context) => ProjectPage(
              title: "Going Outside Simulator 2",
              date: "Jan 2020 - Jan 2021 (With updates sporadically after)",
              affiliation: "Bungus Productions",
              description:
                  "Emergent gameplay in a map packed with secrets and randomly-generated sandbox elements. Winner of the Finally Finish Something 2021 Game Jam out of over 300 entries!",
              skills: "Unity Testing",
              images: [
                HeroLayoutCard(
                  image:
                      "https://img.itch.zone/aW1hZ2UvNTkyNTA5LzQ5MzMxMjgucG5n/original/VQMRVq.png",
                  title: "",
                  details: "",
                  embed: "https://itch.io/embed-upload/12121137?color=ffffff",
                  embedWidth: 1024,
                  embedHeight: 596,
                  embedAllow: "",
                  embedDetails: "",
                ),
                HeroLayoutCard(
                  image:
                      "https://img.itch.zone/aW1hZ2UvNTkyNTA5LzQ5MzMxMjUucG5n/original/8oP2aa.png",
                  title: "",
                  details: "",
                  embed: "https://itch.io/embed-upload/12121137?color=ffffff",
                  embedWidth: 10,
                  embedHeight: 10,
                  embedAllow: "",
                  embedDetails: "",
                ),
                HeroLayoutCard(
                  image:
                      "https://img.itch.zone/aW1hZ2UvNTkyNTA5LzQ5MzMxMjYucG5n/original/HrUt3r.png",
                  title: "",
                  details: "",
                  embed: "https://itch.io/embed-upload/12121137?color=ffffff",
                  embedWidth: 10,
                  embedHeight: 10,
                  embedAllow: "",
                  embedDetails: "",
                ),
                HeroLayoutCard(
                  image:
                      "https://img.itch.zone/aW1hZ2UvNTkyNTA5LzQ5MzMxMjcucG5n/original/UEIQCC.png",
                  title: "",
                  details: "",
                  embed: "https://itch.io/embed-upload/12121137?color=ffffff",
                  embedWidth: 10,
                  embedHeight: 10,
                  embedAllow: "",
                  embedDetails: "",
                ),
              ],
            ),
      },
    );
  }
}
