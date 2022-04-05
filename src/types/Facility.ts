interface Facility {
    name: string,
    type: string,
    operator?: string,
    description?: string,
    productsAccepted?: string[],
    'lat-lng': [number, number]
}

export default Facility