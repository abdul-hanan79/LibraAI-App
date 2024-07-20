declare module 'react-native-typing-animation' {
    import { Component } from 'react';
    import { ViewStyle, StyleProp } from 'react-native';
  
    interface TypingAnimationProps {
      dotColor?: string;
      dotMargin?: number;
      dotAmplitude?: number;
      dotSpeed?: number;
      dotRadius?: number;
      dotX?: number;
      dotY?: number;
      style?: StyleProp<ViewStyle>;
    }
  
    export class TypingAnimation extends Component<TypingAnimationProps> {}
  }
  