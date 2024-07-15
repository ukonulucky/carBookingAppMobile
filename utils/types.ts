export type mainStackParamList = {
    homeScreen: undefined,
    rideRequestScreen: undefined,
    destinationScreen: undefined
}

export type originType = {
    coords: {
        lat: number | null,
        lng: number | null,
    },
    description: string | null
}

export type destinationType = {
    coords: {
        lat: number | null,
        lng: number | null,
    },
    description: string | null
}