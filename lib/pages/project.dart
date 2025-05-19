import 'package:flutter/material.dart';
import '../widgets/drawer.dart';
import '../widgets/hero_card.dart';

class ProjectPage extends StatelessWidget {
  final String title;
  final String date;
  final String affiliation;
  final String description;
  final String skills;
  final List<HeroLayoutCard> images;

  const ProjectPage({
    super.key,
    required this.title,
    required this.date,
    required this.affiliation,
    required this.description,
    required this.skills,
    required this.images,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(title)),
      drawer: AppDrawer(),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: ListView(
          children: [
            Text(
              date,
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
            ),
            if (affiliation.isNotEmpty)
              Padding(
                padding: const EdgeInsets.only(top: 4.0, bottom: 12.0),
                child: Text(
                  affiliation,
                  style: TextStyle(fontSize: 14, fontStyle: FontStyle.italic),
                ),
              ),
            Text(description, style: TextStyle(fontSize: 16)),
            const SizedBox(height: 24),

            /// 💡 Image carousel goes here
            ConstrainedBox(
              constraints: BoxConstraints(
                maxHeight: MediaQuery.sizeOf(context).height / 2,
              ),
              child: StatefulBuilder(
                builder: (BuildContext context, StateSetter setState) {
                  final CarouselController controller = CarouselController(
                    initialItem: 0,
                  );
                  final List<int> weights = const [1, 7, 1];

                  return CarouselView.weighted(
                    controller: controller,
                    itemSnapping: true,
                    flexWeights: weights,
                    children: images,
                    onTap: (int index) {
                      if (controller.isCentered(
                        index,
                        images.length,
                        weights,
                      )) {
                        _dialogBuilder(context, images[index]);
                      }
                      controller.animateToItem(
                        index,
                        duration: Durations.medium1,
                        curve: Curves.easeIn,
                        numChildren: images.length,
                        weights: weights,
                      );
                    },
                  );
                },
              ),
            ),

            const SizedBox(height: 32),
            Text(
              "What I Learned:",
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
                color: Colors.blue[800],
              ),
            ),
            const SizedBox(height: 8),
            Text(
              skills,
              style: TextStyle(fontSize: 14, color: Colors.grey[700]),
            ),
          ],
        ),
      ),
    );
  }

  Future<void> _dialogBuilder(BuildContext context, HeroLayoutCard toOpen) {
    return showDialog<void>(
      context: context,
      barrierDismissible: true,
      barrierColor: Colors.black.withOpacity(0.75),
      builder: (BuildContext context) {
        return Dialog(
          insetPadding: EdgeInsets.zero,
          backgroundColor: Colors.transparent,
          child: Center(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                // Embed iframe
                Container(
                  width: toOpen.embedWidth.toDouble(),
                  height: toOpen.embedHeight.toDouble(),
                  child: HtmlElementView.fromTagName(
                    tagName: 'iframe',
                    onElementCreated: toOpen.onElementCreated,
                  ),
                ),

                // Footer: description + exit button
                Container(
                  width: toOpen.embedWidth.toDouble(),
                  padding: const EdgeInsets.symmetric(
                    vertical: 12,
                    horizontal: 16,
                  ),
                  color: Colors.black87,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      // Optional text or caption
                      Expanded(
                        child: Text(
                          toOpen.embedDetails,
                          style: TextStyle(color: Colors.white),
                        ),
                      ),
                      const SizedBox(width: 12),
                      ElevatedButton(
                        onPressed: () => Navigator.of(context).pop(),
                        style: ElevatedButton.styleFrom(),
                        child: const Text('Exit'),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}

extension CarouselControllerExtension on CarouselController {
  Future<void> animateToItem(
    int index, {
    Duration duration = const Duration(milliseconds: 300),
    Curve curve = Curves.ease,
    int numChildren = 0,
    List<int> weights = const [],
  }) async {
    index = index.clamp(0, numChildren - 1);

    await Future.wait<void>(<Future<void>>[
      for (final ScrollPosition position in positions.cast<ScrollPosition>())
        position.animateTo(
          _getTargetOffset(position, index, numChildren, weights),
          duration: duration,
          curve: curve,
        ),
    ]);
  }

  double _getTargetOffset(
    ScrollPosition position,
    int index,
    int numChildren,
    List<int> weights,
  ) {
    final int totalWeight = weights.reduce((int a, int b) => a + b);
    final double dimension = position.viewportDimension;

    int leadingIndex = index;
    leadingIndex = leadingIndex.clamp(0, numChildren - 1);

    return dimension * (weights.first / totalWeight) * leadingIndex;
  }

  bool isCentered(int index, int numItems, List<int> weights) {
    return (offset == _getTargetOffset(position, index, numItems, weights));
  }
}
