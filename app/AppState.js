import { Jot } from './models/Jots.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  jots = [
    new Jot({ stars: "⭐⭐⭐⭐⭐", hotel: "Grand Hyatt", location: "USA", body: "Would stay here again." }),
    new Jot({ stars: "⭐⭐⭐", hotel: "Best Western", location: "USA", body: "Basic, clean rooms." }),
    new Jot({ stars: "⭐⭐⭐⭐", hotel: "Grand Mercure", location: "AUS", body: "Located in Darling Harbor.  Central to everything." }),
    new Jot({ stars: "⭐⭐⭐", hotel: "Hilton-YVR", location: "CAN", body: "Located at the end of east runway.  Central to everything." }),
    new Jot({ stars: "⭐⭐", hotel: "Air BnB", location: "FRA", body: "Small flat located near L'Arc de Triomphe. Sleeps 3. Central to everything." }),

  ];

  /**@type {Jot} */
  activeJot = null
}

export const AppState = createObservableProxy(new ObservableAppState())