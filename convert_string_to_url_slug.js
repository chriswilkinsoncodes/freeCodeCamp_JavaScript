#!/usr/bin/env node

// Only change code below this line
function urlSlug(title) {
    let urlStub = title.trim().split(/\s+/).join("-").toLowerCase()
    return urlStub
}
// Only change code above this line
console.log(urlSlug(" Winter Is Coming"))
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))
console.log(urlSlug("Hold The Door"))
