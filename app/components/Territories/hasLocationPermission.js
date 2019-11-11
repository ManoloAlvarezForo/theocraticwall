import {Platform} from 'react-native';
import Mapbox from '@react-native-mapbox-gl/maps';

export async function hasLocationPermission() {
  if (
    Platform.OS === 'web' ||
    Platform.OS === 'ios' ||
    (Platform.OS === 'android' && Platform.Version < 23)
  ) {
    return true;
  }
  const isGranted = await Mapbox.requestAndroidLocationPermissions();

  console.log('isGranted', isGranted);
  return isGranted;
}
