import { AppState } from "../AppState.js"
import { jotsService } from "../services/JotsService.js"
import { getFormData } from "../utils/FormHandler.js"

export class JotsController {
    constructor() {
        console.log('Hello from JotsController!')
        this.drawJots()
        AppState.on('activeJot', this.drawActiveJots)
        AppState.on('jots', this.drawJots)
        jotsService.loadJots()
    }

    drawJots() {
        const jots = AppState.jots
        let listJots = ''
        jots.forEach(jot => listJots += jot.ListTemplate)
        const listJotsElem = document.getElementById('list-jots')
        const countElm = document.getElementById('jot-count')
        listJotsElem.innerHTML = listJots
        countElm.innerHTML = jots.length.toString()
        console.log(listJotsElem)
    }

    setActiveJot(jotId) {
        console.log('clicked on the jot');
        console.log(jotId)
        jotsService.getActiveJot(jotId)
    }

    drawActiveJots() {
        console.log('⚙️')
        const activeJot = AppState.activeJot
        const activeJotElem = document.getElementById('active-jot')
        if (AppState.activeJot == null) {
            return
        }
        else {

            activeJotElem.innerHTML = activeJot.ActiveJotTemplate
        }
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

    deleteActiveJot() {
        console.log('deleting hotel')
        const confirmed = confirm('Are you sure you want to delete this Hotel?')
        if (confirmed == false) return
        jotsService.deleteActiveJot()
    }

}

