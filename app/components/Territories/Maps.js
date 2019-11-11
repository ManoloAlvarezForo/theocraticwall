import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoibWFub2xvYWx2YXJlemZvcm8iLCJhIjoiY2pyd21tZDZ0MGVkNDQ0bXRvMjdtM3prNCJ9.DmEYBaoUdgwPT5YbM08ygQ',
);

const CENTER_TERRITORY = [-66.176102, -17.387183];
const MAP_STYLE = 'mapbox://styles/manoloalvarezforo/ck0ijwl8z077u1cr3xdgk5ip4';

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
        logoEnabled={false}
        rotateEnabled={true}
        styleURL={MAP_STYLE}
        style={styles.container}>
        <MapboxGL.Camera centerCoordinate={CENTER_TERRITORY} zoomLevel={15} />
      </MapboxGL.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ShowMap;
