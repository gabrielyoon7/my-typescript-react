export type StationsRequest = {
  longitude: number,
  latitude: number,
  longitudeDelta: number,
  latitudeDelta: number
}

export type Station = {
  id: number,
  latitude: number,
  longitude: number,
  title: string
}
