import { generateId } from "../utils/GenerateId.js"


export class Jot {

  constructor(data) {
    this.id = data.id || generateId()
    this.stars = data.stars
    this.hotel = data.hotel
    this.jotNumber = this.hotel + '-' + this.id.slice(5, 10).toUpperCase()
    this.location = data.location
    this.color = data.color
    this.body = data.body || ''
    // FIXME this is not an optional, this or that, this is just poor JS that doesn't work as intended
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date()

  }

  get ListTemplate() {
    return `
        <li role="button" id="" onclick="app.JotsController.setActiveJot('${this.id}')">${this.jotNumber}</li>
        `
  }

  get ActiveJotTemplate() {
    return `
        <div class="row active-jot-border">
            <div class="col-12">
                <div>
                  <div class="text-end">#${this.jotNumber}</div>
                  <h3><i style="color: ${this.color}" class="mdi mdi-bed-outline"></i>${this.stars} Hotel: ${this.hotel}</h3>
                </div>
              

              <p class="text">Location: ${this.location}</p>
              <p class="date-style">Created on: ${this.CreatedAtFormatted}</p>
              <p class="date-style">Last updated: ${this.UpdatedAtFormatted}</p>
            </div>
            <div>
              <form id="user-form" class="form-control">
                <textarea name="body" id="" class="active-jot-box">${this.body}</textarea>
              </form>
            </div>
            <div class="d-flex justify-content-between">
              <button id="" class="text-info fw-bold" onclick="app.JotsController.saveActiveJot()">Save Jot</button>
              <button type="button" class="" onclick="app.JotsController.deleteActiveJot()">Delete</button>
            </div>
        </div>
     `
  }

  get CreatedAtFormatted() {
    return this.createdAt.toLocaleDateString('en-US', {
      weekday: 'long',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      dayPeriod: 'long',

    })
  }

  get UpdatedAtFormatted() {
    return this.updatedAt.toLocaleTimeString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  }
}
