import 'package:flutter/material.dart';
import '../widgets/drawer.dart';
import 'package:url_launcher/url_launcher.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

  void followLink(BuildContext context, String route, bool isUrl) async {
    if (isUrl) {
      await launchUrl(Uri.parse(route), mode: LaunchMode.externalApplication);
    } else {
      Navigator.pushReplacementNamed(context, route);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      drawer: const AppDrawer(),
      appBar: AppBar(title: const Text('Home')),
      body: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(12),
              child: Image.network(
                'https://media.licdn.com/dms/image/v2/D5603AQGE3VCuLmnKMw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1690264035129?e=1753315200&v=beta&t=jHOffOlBnNTBEgegfyjBS6xnsVAGUsAf8HAimAcC9l0',
                height: 300,
                width: 400,
                fit: BoxFit.cover,
              ),
            ),
            const SizedBox(width: 32),

            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'My name is Alec. Welcome to my portfolio app!',
                    style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                      fontWeight: FontWeight.bold,
                      color: Colors.blue[800],
                    ),
                  ),
                  buildLink(
                    context,
                    'LinkedIn',
                    'https://www.linkedin.com/in/alec-evans-348318285',
                    true,
                  ),
                  const SizedBox(height: 12),
                  Text(
                    'This app showcases some of my projects:',
                    style: Theme.of(context).textTheme.bodyLarge,
                  ),
                  const SizedBox(height: 16),
                  buildLink(
                    context,
                    'Enhanced Expressive Technology Studio',
                    '/project1',
                    false,
                  ),
                  buildLink(
                    context,
                    'Veterinary Simulation',
                    '/project2',
                    false,
                  ),
                  buildLink(context, 'Bungus Productions', '/project3', false),
                  buildLink(
                    context,
                    'Going Outside Simulator 2',
                    '/project6',
                    false,
                  ),
                  buildLink(context, 'VR Pier Project', '/project4', false),
                  buildLink(context, 'MIPS Debugger', '/project5', false),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget buildLink(
    BuildContext context,
    String label,
    String route,
    bool isLink,
  ) {
    return InkWell(
      onTap: () => followLink(context, route, isLink),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 6),
        child: Text(
          label,
          style: TextStyle(
            color: Colors.blue[700],
            fontSize: 16,
            decoration: TextDecoration.underline,
          ),
        ),
      ),
    );
  }
}
