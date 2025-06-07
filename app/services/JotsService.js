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

    createJot(formData) {
        const jot = new Jot(formData)
        console.log('📃', jot);
        AppState.jots.unshift(jot)
        this.saveActiveJot()
    }
}

export const jotsService = new JotsService()