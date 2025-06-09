import { AppState } from "../AppState.js"
import { Jot } from "../models/Jots.js"
import { loadState, saveState } from "../utils/Store.js";



class JotsService {
    // console.log('Hello from JotsService')
    createJot(jotData) {
        const jot = new Jot(jotData)
        console.log('📃', jot);
        AppState.jots.unshift(jot)
        AppState.activeJot = jot
        this.saveJots()
        // this.saveActiveJot()
    }

    getActiveJot(jotId) {
        const selectedJot = AppState.jots.find(jot => jot.id == jotId)
        AppState.activeJot = selectedJot
        console.log(AppState.activeJot)
    }

    saveActiveJot(newBody) {
        AppState.activeJot.body = newBody
        console.log("💾 save active Jot")
        AppState.activeJot.updatedAt = new Date()
        this.saveJots()
        AppState.emit('activeJot')
    }
    deleteActiveJot() {
        const activeJot = AppState.activeJot
        const indexToRemove = AppState.jots.indexOf(activeJot)
        console.log('removing at index ' + indexToRemove);

        AppState.activeJot = null
        AppState.jots.splice(indexToRemove, 1)
        this.saveJots()
    }

    // FIXME this currently doesn't work, saveState needs to be imported, then you can try it more
    // import from utils/Store.js
    saveJots() {
        const jots = AppState.jots
        saveState('jots', jots)
    }

    // FIXME you have loadJots, so even if we save to local storage we won't use that data anyway
    loadJots() {
        const jots = loadState('jots', [Jot])
        console.log('loaded jots', jots);
        AppState.jots = jots
    }

    //...

}

export const jotsService = new JotsService()