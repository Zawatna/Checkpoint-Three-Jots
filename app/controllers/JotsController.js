import { AppState } from "../AppState.js"
import { jotsService } from "../services/JotsService.js"
import { getFormData } from "../utils/FormHandler.js"

export class JotsController {
    constructor() {
        console.log('Hello from JotsController!')
        this.drawJots()
        AppState.on('activeJot', this.drawActiveJots)
        // this.drawActiveJots()
    }

    drawJots() {
        const listJotsElem = document.getElementById('list-jots')
        let listJots = ''
        const jots = AppState.jots
        jots.forEach(jot => listJots += jot.ListTemplate)
        listJotsElem.innerHTML = listJots
        console.log(listJotsElem)
    }

    setActiveJot(jotId) {
        console.log('clicked on the jot');
        console.log(jotId)

        jotsService.getActiveJot(jotId)
    }

    drawActiveJots() {
        console.log('⚙️')
        const activeJotElem = document.getElementById('active-jot')
        const activeJot = AppState.activeJot
        activeJotElem.innerHTML = activeJot.ActiveJotTemplate
    }

    saveActiveJot() {
        const form = document.getElementById('user-form')
        console.log('saving active jot')
        const formData = getFormData(form)
        console.log('🎯', formData)
        jotsService.saveActiveJot(formData.body)
    }

    createJot() {
        console.log('⚙️', event);
        event.preventDefault();
        // @type { HTMLFormElement }
        const form = event.target
        const jotData = getFormData(form)
        console.log('submitted', form, jotData);
        console.log('jot data', jotData);
        jotsService.createJot(jotData)
        form.reset()

    }

}

