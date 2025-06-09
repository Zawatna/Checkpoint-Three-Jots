import { AppState } from "../AppState.js"
import { Jot } from "../models/Jots.js"



class JotsService {
    // console.log('Hello from JotsService')
    createJot(jotData) {
        const jot = new Jot(jotData)
        console.log('📃', jot);
        AppState.jots.unshift(jot)
        AppState.activeJot = jot
        this.saveJots()
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

    saveJots() {
        const jots = AppState.jots
        saveState('jots', jots)
    }

    deleteActiveJot() {
        const activeJot = AppState.activeJot
        const indexToRemove = AppState.jots.indexOf(activeJot)
        AppState.activeJot = null
        AppState.jots.splice(indexToRemove, 1)
        this.saveJots()
    }


}

export const jotsService = new JotsService()