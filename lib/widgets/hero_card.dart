import 'package:flutter/material.dart';
import 'package:web/web.dart' as web;

class HeroLayoutCard extends StatelessWidget {
  const HeroLayoutCard({
    super.key,
    required this.image,
    required this.title,
    required this.details,
    required this.embed,
    required this.embedWidth,
    required this.embedHeight,
    required this.embedAllow,
    required this.embedDetails,
  });

  final String image;
  final String title;
  final String details;
  final String embed;
  final int embedWidth;
  final int embedHeight;
  final String embedAllow;
  final String embedDetails;

  void onElementCreated(Object element) {
    web.HTMLIFrameElement IFrame = (element as web.HTMLIFrameElement);
    /*IFrame.innerHTML =
                  "<iframe frameborder=\"0\" src=\"https://itch.io/embed-upload/12121137?color=ffffff\" allowfullscreen=\"\" width=\"1024\" height=\"596\"><a href=\"https://bungus-productions.itch.io/going-outside-simulator-2\">Play Going Outside Simulator 2 on itch.io</a></iframe>\""
                      .toJS;*/
    IFrame.frameBorder = "0";
    IFrame.src = embed;
    IFrame.width = embedWidth.toString();
    IFrame.height = embedHeight.toString();
    IFrame.allowFullscreen = true;
    IFrame.allow = embedAllow;
  }

  @override
  Widget build(BuildContext context) {
    final double width = MediaQuery.sizeOf(context).width;
    return Stack(
      alignment: AlignmentDirectional.bottomStart,
      children: <Widget>[
        ClipRect(
          child: OverflowBox(
            maxWidth: width * 7 / 8,
            minWidth: width * 7 / 8,
            child: Image(fit: BoxFit.cover, image: NetworkImage(image)),
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(18.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              Text(
                title,
                overflow: TextOverflow.clip,
                softWrap: false,
                style: Theme.of(
                  context,
                ).textTheme.headlineLarge?.copyWith(color: Colors.white),
              ),
              const SizedBox(height: 10),
              Text(
                details,
                overflow: TextOverflow.clip,
                softWrap: false,
                style: Theme.of(
                  context,
                ).textTheme.bodyMedium?.copyWith(color: Colors.white),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
