/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoibWFub2xvYWx2YXJlemZvcm8iLCJhIjoiY2pyd21tZDZ0MGVkNDQ0bXRvMjdtM3prNCJ9.DmEYBaoUdgwPT5YbM08ygQ',
);

const CENTER_TERRITORIE = [-66.176102, -17.387183];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

const ShowMap = () => {
  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);
  }, []);
  return (
    <View style={styles.container}>
      <MapboxGL.MapView
        showUserLocation={true}
        animated={true}
        zoomEnabled={true}
        rotateEnabled={true}
        style={styles.map}>
        <MapboxGL.Camera centerCoordinate={CENTER_TERRITORIE} zoomLevel={15} />
      </MapboxGL.MapView>
    </View>
  );
};

export default ShowMap;
