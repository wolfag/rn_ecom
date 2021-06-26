import React from 'react';
import {PanResponder, View, Animated, StyleSheet, Image} from 'react-native';

import building from '@src/assets/images/building.png';

const GAP = 20;

export default class HomeScreen extends React.Component {
  state = {points: [], layout: {}};

  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {},
    onPanResponderMove: () => {},
    onPanResponderRelease: () => {},
    onStartShouldSetPanResponder: () => true,
    onPanResponderStart: (e, gestureState) => {
      const newPoint = {
        x: gestureState.x0,
        y: gestureState.y0,
      };
      const exist = this.state.points.find(p => {
        return (
          newPoint.x <= p.x + GAP &&
          newPoint.x >= p.x - GAP &&
          newPoint.y <= p.y + GAP &&
          newPoint.y >= p.y - GAP
        );
      });
      if (!exist) {
        this.setState({
          points: [...this.state.points, newPoint],
        });
      }
    },
  });

  render() {
    const {points, layout} = this.state;

    return (
      <View style={styles.container}>
        <Animated.View
          style={styles.pan}
          {...this.panResponder.panHandlers}
          onLayout={e => {
            console.log({e: e.nativeEvent});
            this.setState({
              layout: {x: e.nativeEvent.layout.x, y: e.nativeEvent.layout.y},
            });
          }}>
          {points.map((p, i) => {
            return (
              <View
                key={i}
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: 'red',
                  position: 'absolute',
                  top: p.y - layout.y,
                  left: p.x - layout.x,
                }}
              />
            );
          })}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}>
            <Image
              source={building}
              style={{
                width: 200,
                height: 200,
              }}
              resizeMode="contain"
            />
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  pan: {
    backgroundColor: 'yellow',
    width: '100%',
    height: '50%',
  },
});
