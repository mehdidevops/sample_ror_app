import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

    static targets =['dropdown', 'openUserMenu']

    connect () {
    this.openUserMenuTarget.addEventListener("click", (e)=> {
      openDropdown(this.dropdownTarget)
    })
    }
}

function openDropdown(element) {
  toggle(element).then(() => {
    console.log("Enter transition complete")
  })
}

function closeDropdown() {
  leave(this.dropdownTarget).then(() => {
      element.destroy();
  })
}