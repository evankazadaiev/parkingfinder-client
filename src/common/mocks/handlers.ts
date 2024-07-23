import { http, HttpResponse } from 'msw'

const mockData  = [
    {
        "name": "Alexanderplatz Parking",
        "location": {
            "address": "Alexanderplatz, 10178 Berlin, Germany",
            "latitude": 52.521918,
            "longitude": 13.413215
        },
        "type": "Paid",
        "price_per_hour": 2.5,
        "capacity": 500,
        "available_spots": 120,
        "amenities": ["EV Charging", "Handicapped Accessible", "24/7 Access"]
    },
    {
        "name": "Mall of Berlin Parking",
        "location": {
            "address": "Leipziger Pl. 12, 10117 Berlin, Germany",
            "latitude": 52.509991,
            "longitude": 13.377111
        },
        "type": "Paid",
        "price_per_hour": 3.0,
        "capacity": 1000,
        "available_spots": 450,
        "amenities": ["Covered Parking", "Handicapped Accessible", "Security Patrol"]
    },
    {
        "name": "Tiergarten Parking",
        "location": {
            "address": "Straße des 17. Juni, 10557 Berlin, Germany",
            "latitude": 52.514487,
            "longitude": 13.350122
        },
        "type": "Free",
        "capacity": 300,
        "available_spots": 75,
        "amenities": ["Open Air", "Handicapped Accessible", "Near Park"]
    },
    {
        "name": "Berlin Central Station Parking",
        "location": {
            "address": "Europaplatz 1, 10557 Berlin, Germany",
            "latitude": 52.525589,
            "longitude": 13.369548
        },
        "type": "Paid",
        "price_per_hour": 4.0,
        "capacity": 1200,
        "available_spots": 600,
        "amenities": ["EV Charging", "Handicapped Accessible", "24/7 Access", "Covered Parking"]
    },
    {
        "name": "Kollwitzplatz Parking",
        "location": {
            "address": "Kollwitzstraße 68, 10435 Berlin, Germany",
            "latitude": 52.534689,
            "longitude": 13.413652
        },
        "type": "Free",
        "capacity": 150,
        "available_spots": 30,
        "amenities": ["Open Air", "Near Market", "Handicapped Accessible"]
    }
];
export const handlers = [
    http.get('https://example.com/parkings', () => {
        return HttpResponse.json(mockData)
    }),
]
