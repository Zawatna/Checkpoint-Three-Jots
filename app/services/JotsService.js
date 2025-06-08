import { AppState } from "../AppState.js"
import { Jot } from "../models/Jots.js"



class JotsService {
    // console.log('Hello from JotsService')
    getActiveJot(jotId) {
        const selectedJot = AppState.jots.find(jot => jot.id == jotId)
        AppState.activeJot = selectedJot
        console.log(AppState.activeJot)
    }

    saveActiveJot(newBody) {
        AppState.activeJot.body = newBody
        console.log("💾 save active Jot")
    }

    createJot(jotData) {
        const jot = new Jot(jotData)
        console.log('📃', jot);
        AppState.jots.unshift(jot)
        AppState.activeJot = jot
    }

    saveJots() {
        saveState('jots', AppState.jots)
    }

    updateJot(body) {
        AppState.activeJot.body = body
        this.saveJots()
    }

}

export const jotsService = new JotsService()