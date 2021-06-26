import React from 'react';
import {
  PanResponder,
  View,
  Animated,
  StyleSheet,
  Image,
  Alert,
  Text,
} from 'react-native';

import building from '@src/assets/images/building.png';
import ActionSheet from 'react-native-actionsheet';

const GAP = 20;
const POINT_SIZE = 20;
const ACTION_SHEET_MENUS = ['Move', 'Edit', 'Delete', 'Cancel'];

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {points: [], layout: {}, currentPoint: null};

    this.actionSheet = React.createRef();

    this.pan = new Animated.ValueXY();

    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderRelease,
      onStartShouldSetPanResponder: () => true,
      onPanResponderStart: (e, gestureState) => {},
      onPanResponderEnd: this.handlePanResponderEnd,
    });
  }

  existPoint = point => {
    const index = this.state.points.findIndex(p => {
      return (
        point.x <= p.x + GAP &&
        point.x >= p.x - GAP &&
        point.y <= p.y + GAP &&
        point.y >= p.y - GAP
      );
    });
    return this.state.points[index];
  };

  addNewPoint = () => {
    const newPoint = {
      id: new Date().getTime(),
      x: this.gestureState.x0,
      y: this.gestureState.y0,
    };
    const exist = this.existPoint(newPoint);
    if (!exist) {
      this.setState({
        points: [...this.state.points, newPoint],
      });
    }
  };

  handlePanResponderGrant = (e, gestureState) => {
    console.log('--start');
    this.gestureState = JSON.parse(JSON.stringify(gestureState));
    const newPoint = {
      x: this.gestureState.x0,
      y: this.gestureState.y0,
    };
    const exist = this.existPoint(newPoint);

    if (exist) {
      this.setState({currentPoint: exist});
      this.actionSheet?.current?.show();
    } else {
      this.longPressTimeout = setTimeout(() => {
        Alert.alert('Add new marker', 'Do you want to add new marker here?', [
          {
            text: 'Add',
            onPress: () => this.addNewPoint(),
          },
          {
            text: 'Cancel',
            onPress: null,
            style: 'cancel',
          },
        ]);
      }, 300);
    }
  };

  handlePanResponderMove = (e, gestureState) => {
    clearTimeout(this.longPressTimeout);
    // this.gestureState = {};
  };

  handlePanResponderRelease = (e, gestureState) => {
    clearTimeout(this.longPressTimeout);
    // this.gestureState = {};
    console.log('Touch released');
  };

  handlePanResponderEnd = (e, gestureState) => {
    clearTimeout(this.longPressTimeout);
    // this.gestureState = {};
    console.log('Finger pulled up from the image');
  };

  onMove = () => {};

  onEdit = () => {};

  onDelete = () => {
    const newsPoint = this.state.points.filter(
      item => item.id !== this.state.currentPoint?.id,
    );
    this.setState({points: newsPoint});
  };

  onMenuPress = index => {
    switch (ACTION_SHEET_MENUS[index]) {
      case 'Move':
        this.onMove();
        break;
      case 'Edit':
        this.onEdit();
        break;
      case 'Delete':
        this.onDelete();
        break;
    }
  };

  render() {
    const {points, layout, currentPoint} = this.state;

    return (
      <View style={styles.container}>
        <Animated.View
          style={styles.pan}
          {...this.panResponder.panHandlers}
          onLayout={e => {
            this.setState({
              layout: {x: e.nativeEvent.layout.x, y: e.nativeEvent.layout.y},
            });
          }}>
          {points.map((p, index) => {
            return (
              <View
                key={p.id}
                style={[
                  styles.point,
                  {
                    backgroundColor:
                      p.id === currentPoint?.id ? 'red' : 'green',
                    top: p.y - layout.y - POINT_SIZE / 2,
                    left: p.x - layout.x - POINT_SIZE / 2,
                  },
                ]}>
                <Text style={styles.pointText}>{index}</Text>
              </View>
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
        <ActionSheet
          ref={this.actionSheet}
          title={'Which one do you like ?'}
          options={ACTION_SHEET_MENUS}
          cancelButtonIndex={ACTION_SHEET_MENUS.length - 1}
          destructiveButtonIndex={2}
          onPress={this.onMenuPress}
        />
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
  point: {
    width: POINT_SIZE,
    height: POINT_SIZE,
    borderRadius: POINT_SIZE / 2,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointText: {
    color: '#fff',
  },
});
