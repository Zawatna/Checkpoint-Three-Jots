import { Jot } from './models/Jots.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  jots = [
    new Jot({ stars: "⭐⭐⭐⭐⭐", hotel: "Grand Hyatt", location: "USA", color: "green", createdAt: "06/06/06", body: "Would stay here again." }),
    new Jot({ stars: "⭐⭐⭐", hotel: "Best Western", location: "USA", color: "red", createdAt: "06/06/06", body: "Basic, clean rooms." }),
    new Jot({ stars: "⭐⭐⭐⭐", hotel: "Grand Mercure", location: "AUS", color: "blue", createdAt: "06/06/06", body: "Located in Darling Harbor.  Central to everything." }),
    new Jot({ stars: "⭐⭐⭐", hotel: "Hilton-YVR", location: "CAN", color: "red", createdAt: "06/06/06", body: "Located at the end of east runway.  Central to everything." }),
    new Jot({ stars: "⭐⭐", hotel: "Air BnB", location: "FRA", color: "black", createdAt: "06/06/06", body: "Small flat located near L'Arc de Triomphe. Sleeps 3. Central to everything." }),

  ];

  /**@type {Jot} */
  activeJot = null
}

export const AppState = createObservableProxy(new ObservableAppState())