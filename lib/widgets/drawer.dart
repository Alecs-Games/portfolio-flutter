import 'package:flutter/material.dart';

class AppDrawer extends StatelessWidget {
  const AppDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: [
          DrawerHeader(
            decoration: BoxDecoration(color: Colors.blue),
            child: Text(
              'Menu',
              style: TextStyle(color: Colors.white, fontSize: 24),
            ),
          ),
          ListTile(
            title: Text('Home'),
            onTap: () => Navigator.pushReplacementNamed(context, '/home'),
          ),
          ListTile(
            title: Text('Enhanced Expressive Technology'),
            onTap: () => Navigator.pushReplacementNamed(context, '/project1'),
          ),
          ListTile(
            title: Text('Veterinary Simulation'),
            onTap: () => Navigator.pushReplacementNamed(context, '/project2'),
          ),
          ListTile(
            title: Text('Bungus Productions'),
            onTap: () => Navigator.pushReplacementNamed(context, '/project3'),
          ),
          ListTile(
            title: Text('Going Outside Simulator'),
            onTap: () => Navigator.pushReplacementNamed(context, '/project6'),
          ),
          ListTile(
            title: Text('VR Pier Project'),
            onTap: () => Navigator.pushReplacementNamed(context, '/project4'),
          ),
          ListTile(
            title: Text('MIPS Debugger'),
            onTap: () => Navigator.pushReplacementNamed(context, '/project5'),
          ),
        ],
      ),
    );
  }
}
