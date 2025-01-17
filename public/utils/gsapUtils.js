import { gsap } from 'gsap';
import {
  ScrollTrigger,
  ScrollToPlugin,
  Draggable,
  Observer,
  CustomEase,
  MotionPathPlugin,
  Flip,
} from 'gsap/all';

// Register all the necessary plugins
gsap.registerPlugin(
  ScrollTrigger,  // Scroll-based animations
  ScrollToPlugin, // Smooth scrolling
  Draggable,      // Drag-and-drop interactions
  Observer,       // Gesture detection (scroll, drag, etc.)
  CustomEase,     // Custom easing curves
  MotionPathPlugin, // Animations along paths
  Flip            // Layout transitions and element flipping
);

export default gsap;
