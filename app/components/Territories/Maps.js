/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Animated} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Svg, {G, Path, SvgUri} from 'react-native-svg';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import Theme from '../../utils/Theme/Theme';
IconIonicons.loadFont();

MapboxGL.setAccessToken(
  'pk.eyJ1IjoibWFub2xvYWx2YXJlemZvcm8iLCJhIjoiY2pyd21tZDZ0MGVkNDQ0bXRvMjdtM3prNCJ9.DmEYBaoUdgwPT5YbM08ygQ',
);

const CENTER_TERRITORY = [-66.176102, -17.387183];
const MAP_STYLE = 'mapbox://styles/manoloalvarezforo/ck0ijwl8z077u1cr3xdgk5ip4';
const ANNOTATION_SIZE = 22;
const FAKE_DATA_COORDINATES = [
  {
    location: 'Alcira Orellana',
    date: '24-12-2019',
    time: '08:30 AM',
    leader: 'Boris Garcias',
    territories: '5 (1,2,3)',
    coordinates: [-66.17812875819055, -17.384825424862527],
  },
  {
    location: 'Casa Birbuet',
    date: '21-12-2019',
    time: '05:00 PM',
    coordinates: [-66.17665519831019, -17.384007855977288],
    leader: 'Pericles Birbuet',
    territories: '5 (1,2,3)',
  },
  {
    location: 'Calancha y Humbolt',
    date: '21-12-2019',
    time: '08:30 AM',
    coordinates: [-66.16407516462641, -17.383598759984324],
    leader: 'Tomas Reigada',
    territories: '5 (1,2,3)',
  },
  {
    location: 'Casa Juan Olguin',
    date: '24-12-2019',
    time: '09:15 AM',
    coordinates: [-66.16553587013027, -17.382133296830233],
    leader: 'Gaston De La Fuente',
    territories: '5 (1,2,3)',
  },
  {
    location: 'Puente Cobija',
    date: '24-12-2019',
    time: '05:00 PM',
    coordinates: [-66.16490838156648, -17.38752150845383],
    leader: 'Calixto Encinas',
    territories: '5 (1,2,3)',
  },
];

const ShowMap = () => {
  const [center, setCenter] = useState([
    [-66.17650455296835, -17.386487143212435],
  ]);
  const [zoom, setZoom] = useState(12);
  const [activeAnnotationIndex, setActiveAnnotationIndex] = useState(-1);
  const [
    previousActiveAnnotationIndex,
    setPreviousActiveAnnotationIndex,
  ] = useState(-1);
  const [backgroundColor, setBackgroundColor] = useState('blue');
  const [coordinates, setCoordinates] = useState(FAKE_DATA_COORDINATES);
  const [pointInView, setPointInView] = useState(null);
  const [scaleIn, setScaleIn] = useState(null);
  const [scaleOut, setScaleOut] = useState(null);
  const map = useRef(null);

  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);
  }, []);

  const onPressHandle = async e => {
    // setCoordinates([...coordinates, e.geometry.coordinates]);
    // const pointInViewSaved = await this._map.getPointInView(
    //   e.geometry.coordinates,
    // );
    // setPointInView(pointInViewSaved);
    // // alert(`map pressed: ${coordinates[0]}`);
    // setCenter(CENTER_TERRITORY);
    // setZoom(14);
  };

  const onAnnotationSelected = (activeIndexParam, feature) => {
    // if (activeAnnotationIndex === activeIndexParam) {
    //   return;
    // }
    // setScaleIn(new Animated.Value(0.6));
    // Animated.timing(scaleIn, {toValue: 1.0, duration: 200}).start();
    // setActiveAnnotationIndex(activeIndexParam);
    // if (previousActiveAnnotationIndex !== -1) {
    //   map.moveTo(feature.geometry.coordinates, 500);
    // }
  };

  const onAnnotationDeselected = deselectedIndex => {
    // if (activeAnnotationIndex === deselectedIndex) {
    //   setActiveAnnotationIndex(-1);
    // }
    // setScaleOut(new Animated.Value(1));
    // Animated.timing(scaleOut, {toValue: 0.6, duration: 200}).start();
    // setPreviousActiveAnnotationIndex(deselectedIndex);
  };

  const renderAnnotations = () => {
    const items = [];

    for (let i = 0; i < coordinates.length; i++) {
      const coordinate = coordinates[i];
      // const title = `Lon: ${coordinate[0]} Lat: ${coordinate[1]}`;
      const id = `pointAnnotation${i}`;

      // const animationStyle = {};
      // if (i === activeAnnotationIndex) {
      //   animationStyle.transform = [{scale: scaleIn}];
      // } else if (i === previousActiveAnnotationIndex) {
      //   animationStyle.transform = [{scale: scaleOut}];
      // }

      items.push(
        <MapboxGL.PointAnnotation
          key={id}
          id={id}
          coordinate={coordinate.coordinates}
          onSelected={onAnnotationSelected}
          onDeselected={onAnnotationDeselected}>
          <MapboxGL.Callout>
            <View style={styles.talkBubbleSquare}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                  backgroundColor: Theme.secondaryDefault,
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingBottom: 7,
                  paddingTop: 7,
                }}>
                <Text style={{fontWeight: '700', color: '#fff'}}>
                  Predicacion - {coordinate.time}
                </Text>
              </View>
              <View
                style={{
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingBottom: 15,
                  paddingTop: 10,
                }}>
                <Text>
                  <Text style={{fontWeight: '700'}}>Lugar: </Text>
                  {coordinate.location}
                </Text>
                <Text>
                  <Text style={{fontWeight: '700'}}>Fecha: </Text>
                  {coordinate.date}
                </Text>
                <Text>
                  <Text style={{fontWeight: '700'}}>Cond.: </Text>
                  {coordinate.leader}
                </Text>
                <Text>
                  <Text style={{fontWeight: '700'}}>Territorios: </Text>
                  {coordinate.territories}
                </Text>
              </View>
            </View>
          </MapboxGL.Callout>
        </MapboxGL.PointAnnotation>,
      );
    }

    return items;
  };

  return (
    <View style={styles.container}>
      <MapboxGL.MapView
        ref={map}
        showUserLocation={true}
        animated={true}
        zoomEnabled={true}
        logoEnabled={false}
        rotateEnabled={true}
        styleURL={MAP_STYLE}
        onPress={onPressHandle}
        style={styles.container}>
        <MapboxGL.Camera zoomLevel={13} centerCoordinate={CENTER_TERRITORY} />
        {renderAnnotations()}
      </MapboxGL.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  // bubble: {
  //   borderRadius: 30,
  //   position: 'absolute',
  //   bottom: 16,
  //   left: 48,
  //   right: 48,
  //   minHeight: 60,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: 'white',
  // },
  // annotationContainer: {
  //   width: ANNOTATION_SIZE,
  //   height: ANNOTATION_SIZE,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: 'orange',
  //   borderRadius: ANNOTATION_SIZE / 2,
  //   borderWidth: StyleSheet.hairlineWidth,
  //   borderColor: 'black',
  // },
  // annotationFill: {
  //   width: ANNOTATION_SIZE - 3,
  //   height: ANNOTATION_SIZE - 3,
  //   borderRadius: (ANNOTATION_SIZE - 3) / 2,
  //   backgroundColor: 'orange',
  //   transform: [{scale: 0.6}],
  // },
  // calloutContainer: {
  //   flex: 1,
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: 272,
  //   zIndex: 999999,
  //   borderRadius: 15,
  //   backgroundColor: 'yellow',
  // },
  // calloutTip: {
  //   zIndex: 1000,
  //   marginTop: -2,
  //   elevation: 0,
  //   backgroundColor: 'transparent',
  //   borderTopWidth: 16,
  //   borderRightWidth: 8,
  //   borderBottomWidth: 0,
  //   borderLeftWidth: 8,
  //   borderTopColor: 'white',
  //   borderRightColor: 'transparent',
  //   borderBottomColor: 'transparent',
  //   borderLeftColor: 'transparent',
  // },
  // calloutContent: {
  //   position: 'relative',
  //   padding: 8,
  //   flex: 1,
  //   borderRadius: 3,
  //   borderWidth: 1,
  //   borderColor: 'rgba(0, 0, 0, 0.2)',
  //   backgroundColor: 'white',
  // },
  talkBubble: {backgroundColor: 'transparent'},
  talkBubbleSquare: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
});

export default ShowMap;

// latitude: geometry.coordinates[1],
// longitude: geometry.coordinates[0],
// screenPointX: properties.screenPointX,
// screenPointY: properties.screenPointY,
