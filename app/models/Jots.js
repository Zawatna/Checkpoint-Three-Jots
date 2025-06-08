import { generateId } from "../utils/GenerateId.js"


export class Jot {

  constructor(data) {
    this.id = generateId()
    this.stars = data.stars
    this.hotel = data.hotel
    this.location = data.location
    this.color = data.color
    this.body = data.body
    this.createdAt = data.createdAt = new Date(data.createdAt)
    this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date()

  }

  get ListTemplate() {
    return `
        <li role="button" id="" onclick="app.JotsController.setActiveJot('${this.id}')">${this.hotel}</li>
        `
  }

  get ActiveJotTemplate() {
    return `
        <div class="row active-jot-border p-2">
            <div class="col-12">
                <div>
                <div class="mdi mdi-bed-outline"> Color string interpolation </i>
                  <h3>${this.stars} Hotel: ${this.hotel}</h3>
                </div>
                </div>

              <p class="text">Location: ${this.location}</p>
              <p class="date-style">Created on: ${this.createdAt}</p>
              <p class="date-style">Last updated: ${this.updatedAt}</p>
            </div>
            <div>
              <form id="user-form" class="form-control">
                <textarea name="body" id="" class="active-jot-box">${this.body}</textarea>
              </form>
            </div>
            <div class="text-center">
              <button id="" class="" onclick="app.JotsController.saveActiveJot()">Submit</button>
              <button class="">Delete</button>
            </div>
        </div>
        `
  }

}