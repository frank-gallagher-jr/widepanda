// WidePanda V0.3.0 - app.js
// Get The URL
const site = window.location.hostname

const defaultSetValue = "350"

// Add Custom CSS - Function
const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

// Create Custom Element - Function
function Create_Custom_Element(tag, attr_tag, attr_name, value) {
    const custom_element = document.createElement(tag)
    custom_element.setAttribute(attr_tag, attr_name)
    custom_element.innerHTML = value
    document.body.append(custom_element)
}


cssInput = 'md-sidenav.bp-sidenav { width: ' + defaultSetValue + 'px !important;'

// JS inject CSS 
// Default BigPanda value is 205px (as of 2022-12)
if (site.includes("bigpanda.io")) {
    
    Add_Custom_Style(cssInput)
}