
let TEAM_NAMES = "teamNames"; // The name of our custom dropdown
let SAVED_TEAM_NAMES = "cherwellSavedNames"; // the name of the local storage containing all the team names
let TEXT_PROMPT = "textPrompt"; // the input box for cherwell team names
let teamNamesDropdown;
let cherwellTeamInput;
let defaultTeamNames = 'W3siZGlzcGxheVZhbHVlIjoiLk5ldCBBcHAgRGV2IiwidGltZXNVc2VkIjowLCJ2YWx1ZSI6Ik5ldEFwcERldiJ9LHsiZGlzcGxheVZhbHVlIjoiLk5ldCBUaWVyIDIiLCJ0aW1lc1VzZWQiOjAsInZhbHVlIjoiTmV0VGllcjIifSx7ImRpc3BsYXlWYWx1ZSI6IjM2NSBDb25maWd1cmF0aW9ucyIsInRpbWVzVXNlZCI6MCwidmFsdWUiOiIzNjVDb25maWd1cmF0aW9ucyJ9LHsiZGlzcGxheVZhbHVlIjoiQWR2YW5jZSBTdXBwb3J0IiwidGltZXNVc2VkIjowLCJ2YWx1ZSI6IkFkdmFuY2VTdXBwb3J0In0seyJkaXNwbGF5VmFsdWUiOiJBUEkgUmVxdWVzdHMiLCJ0aW1lc1VzZWQiOjAsInZhbHVlIjoiQVBJUmVxdWVzdHMifSx7ImRpc3BsYXlWYWx1ZSI6IkFyY2hpdGVjdHMiLCJ0aW1lc1VzZWQiOjAsInZhbHVlIjoiQXJjaGl0ZWN0cyJ9LHsiZGlzcGxheVZhbHVlIjoiQXNzZXQgTWdtdCIsInRpbWVzVXNlZCI6MCwidmFsdWUiOiJBc3NldE1nbXQifSx7ImRpc3BsYXlWYWx1ZSI6IkJBL1BNIiwidGltZXNVc2VkIjowLCJ2YWx1ZSI6IkJBUE0ifSx7ImRpc3BsYXlWYWx1ZSI6IkJQTSIsInRpbWVzVXNlZCI6MCwidmFsdWUiOiJCUE0ifSx7ImRpc3BsYXlWYWx1ZSI6IkRhdGEgTWFuYWdlbWVudCBBV1MiLCJ0aW1lc1VzZWQiOjAsInZhbHVlIjoiRGF0YU1hbmFnZW1lbnRBV1MifSx7ImRpc3BsYXlWYWx1ZSI6IkRhdGEgTWFuYWdlbWVudCBPbiBQcmVtIiwidGltZXNVc2VkIjowLCJ2YWx1ZSI6IkRhdGFNYW5hZ2VtZW50T25QcmVtIn0seyJkaXNwbGF5VmFsdWUiOiJEYXRhIFNlcnZpY2VzIEFQSSIsInRpbWVzVXNlZCI6MCwidmFsdWUiOiJEYXRhU2VydmljZXNBUEkifSx7ImRpc3BsYXlWYWx1ZSI6IkRhdGEgU2VydmljZXMgRVRMIiwidGltZXNVc2VkIjowLCJ2YWx1ZSI6IkRhdGFTZXJ2aWNlc0VUTCJ9LHsiZGlzcGxheVZhbHVlIjoiRGF0YSBTZXJ2aWNlcyBMb29rZXIiLCJ0aW1lc1VzZWQiOjAsInZhbHVlIjoiRGF0YVNlcnZpY2VzTG9va2VyIn0seyJkaXNwbGF5VmFsdWUiOiJEZXYgUHJvZHVjdGl2aXR5IFRvb2xzIiwidGltZXNVc2VkIjowLCJ2YWx1ZSI6IkRldlByb2R1Y3Rpdml0eVRvb2xzIn0seyJkaXNwbGF5VmFsdWUiOiJFQ00iLCJ0aW1lc1VzZWQiOjAsInZhbHVlIjoiRUNNIn0seyJkaXNwbGF5VmFsdWUiOiJJVCBNYW5hZ2VycyIsInRpbWVzVXNlZCI6MCwidmFsdWUiOiJJVE1hbmFnZXJzIn0seyJkaXNwbGF5VmFsdWUiOiJJVCBSZXZpZXciLCJ0aW1lc1VzZWQiOjAsInZhbHVlIjoiSVRSZXZpZXcifSx7ImRpc3BsYXlWYWx1ZSI6IklUU00iLCJ0aW1lc1VzZWQiOjAsInZhbHVlIjoiSVRTTSJ9LHsiZGlzcGxheVZhbHVlIjoiSmF2YSBDdXN0b21lciBBcHAgRGV2IiwidGltZXNVc2VkIjowLCJ2YWx1ZSI6IkphdmFDdXN0b21lckFwcERldiJ9LHsiZGlzcGxheVZhbHVlIjoiSmF2YSBPcGVyYXRpb25hbCBBcHAgRGV2IiwidGltZXNVc2VkIjowLCJ2YWx1ZSI6IkphdmFPcGVyYXRpb25hbEFwcERldiJ9LHsiZGlzcGxheVZhbHVlIjoiSmF2YSBPcHMgLSBMJlQiLCJ0aW1lc1VzZWQiOjAsInZhbHVlIjoiSmF2YU9wc0xUIn0seyJkaXNwbGF5VmFsdWUiOiJKYXZhIE9wcyAtIE5WQSIsInRpbWVzVXNlZCI6MCwidmFsdWUiOiJKYXZhT3BzTlZBIn0seyJkaXNwbGF5VmFsdWUiOiJKYXZhIE9wcyAtIFJpc2svU2V0dGxlbWVudCIsInRpbWVzVXNlZCI6MCwidmFsdWUiOiJKYXZhT3BzUmlza1NldHRsZW1lbnQifSx7ImRpc3BsYXlWYWx1ZSI6IkphdmEgT3BzIC0gVmVydGV4IFRheCIsInRpbWVzVXNlZCI6MCwidmFsdWUiOiJKYXZhT3BzVmVydGV4VGF4In0seyJkaXNwbGF5VmFsdWUiOiJKYXZhIFNhbGVzIEFwcCBEZXYiLCJ0aW1lc1VzZWQiOjAsInZhbHVlIjoiSmF2YVNhbGVzQXBwRGV2In0seyJkaXNwbGF5VmFsdWUiOiJKYXZhIFRpZXIgMiIsInRpbWVzVXNlZCI6MCwidmFsdWUiOiJKYXZhVGllcjIifSx7ImRpc3BsYXlWYWx1ZSI6IkpJUkEgQWRtaW4iLCJ0aW1lc1VzZWQiOjAsInZhbHVlIjoiSklSQUFkbWluIn0seyJkaXNwbGF5VmFsdWUiOiJLbm93bGVkZ2UgTWFuYWdlbWVudCIsInRpbWVzVXNlZCI6MCwidmFsdWUiOiJLbm93bGVkZ2VNYW5hZ2VtZW50In0seyJkaXNwbGF5VmFsdWUiOiJMZXZlbCAyIE1hbmFnZW1lbnQiLCJ0aW1lc1VzZWQiOjAsInZhbHVlIjoiTGV2ZWwyTWFuYWdlbWVudCJ9LHsiZGlzcGxheVZhbHVlIjoiTmV0d29yayBFbmdpbmVlcmluZyIsInRpbWVzVXNlZCI6MCwidmFsdWUiOiJOZXR3b3JrRW5naW5lZXJpbmcifSx7ImRpc3BsYXlWYWx1ZSI6IlBlb3BsZVNvZnQgQXBwIERldiIsInRpbWVzVXNlZCI6MCwidmFsdWUiOiJQZW9wbGVTb2Z0QXBwRGV2In0seyJkaXNwbGF5VmFsdWUiOiJQZW9wbGVTb2Z0IFRpZXIgMiIsInRpbWVzVXNlZCI6MCwidmFsdWUiOiJQZW9wbGVTb2Z0VGllcjIifSx7ImRpc3BsYXlWYWx1ZSI6IlByb2QgT3BzIiwidGltZXNVc2VkIjowLCJ2YWx1ZSI6IlByb2RPcHMifSx7ImRpc3BsYXlWYWx1ZSI6IlFBIiwidGltZXNVc2VkIjowLCJ2YWx1ZSI6IlFBIn0seyJkaXNwbGF5VmFsdWUiOiJTYWxlc2ZvcmNlIiwidGltZXNVc2VkIjowLCJ2YWx1ZSI6IlNhbGVzZm9yY2UifSx7ImRpc3BsYXlWYWx1ZSI6IlNlY3VyaXR5IiwidGltZXNVc2VkIjowLCJ2YWx1ZSI6IlNlY3VyaXR5In0seyJkaXNwbGF5VmFsdWUiOiJTZWN1cml0eSBBZG1pbiIsInRpbWVzVXNlZCI6MCwidmFsdWUiOiJTZWN1cml0eUFkbWluIn0seyJkaXNwbGF5VmFsdWUiOiJTaGFyZVBvaW50IEVuZ2luZWVyaW5nIiwidGltZXNVc2VkIjowLCJ2YWx1ZSI6IlNoYXJlUG9pbnRFbmdpbmVlcmluZyJ9LHsiZGlzcGxheVZhbHVlIjoiU29mdHdhcmUgUmV2aWV3IiwidGltZXNVc2VkIjowLCJ2YWx1ZSI6IlNvZnR3YXJlUmV2aWV3In0seyJkaXNwbGF5VmFsdWUiOiJUYWxlbnQgRGV2ZWxvcG1lbnQiLCJ0aW1lc1VzZWQiOjAsInZhbHVlIjoiVGFsZW50RGV2ZWxvcG1lbnQifSx7ImRpc3BsYXlWYWx1ZSI6IlRlbGVjb20gRW5naW5lZXJpbmciLCJ0aW1lc1VzZWQiOjAsInZhbHVlIjoiVGVsZWNvbUVuZ2luZWVyaW5nIn0seyJkaXNwbGF5VmFsdWUiOiJUaWVyIDEgQXBwbGljYXRpb24iLCJ0aW1lc1VzZWQiOjAsInZhbHVlIjoiVGllcjFBcHBsaWNhdGlvbiJ9LHsiZGlzcGxheVZhbHVlIjoiVGllciAxIERlc2t0b3AiLCJ0aW1lc1VzZWQiOjAsInZhbHVlIjoiVGllcjFEZXNrdG9wIn0seyJkaXNwbGF5VmFsdWUiOiJUaWVyIDEgU3VwcG9ydCIsInRpbWVzVXNlZCI6MCwidmFsdWUiOiJUaWVyMVN1cHBvcnQifSx7ImRpc3BsYXlWYWx1ZSI6IlVuaWZpZWQgQ29tbXVuaWNhdGlvbnMiLCJ0aW1lc1VzZWQiOjAsInZhbHVlIjoiVW5pZmllZENvbW11bmljYXRpb25zIn0seyJkaXNwbGF5VmFsdWUiOiJVTklYIEVuZ2luZWVyaW5nIiwidGltZXNVc2VkIjowLCJ2YWx1ZSI6IlVOSVhFbmdpbmVlcmluZyJ9LHsiZGlzcGxheVZhbHVlIjoiV2luZG93cyBFbmdpbmVlcmluZyIsInRpbWVzVXNlZCI6MCwidmFsdWUiOiJXaW5kb3dzRW5naW5lZXJpbmcifV0='
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    teamNamesDropdown = document.getElementById(TEAM_NAMES)
    cherwellTeamInput = document.getElementById(TEXT_PROMPT)
    if (cherwellTeamInput && !teamNamesDropdown) {
        main()
    } 
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true
});

function main() {
    showTeamNamesDropdown()
}

function getSavedTeamNames() {
    const savedTeamNames = JSON.parse(localStorage.getItem(SAVED_TEAM_NAMES))
    if (savedTeamNames == null) {
        console.log("didnt find existing data, loading fresh")
        let teamNames = JSON.parse(atob(defaultTeamNames))
        setSavedTeamNames(teamNames.sort((first, second) => first.value > second.value))

        return teamNames;
    } else {
        return savedTeamNames;
    }
}

function setSavedTeamNames(savedTeamNames) {
    let teamNames = 
        savedTeamNames
        .filter(isUnique)
        .filter(t => t != null && t != "")
        .sort((first, second) => sortBy(first, second))

    localStorage.setItem(SAVED_TEAM_NAMES, JSON.stringify(teamNames))
}

function sortBy(first, second) {
    return second.timesUsed - first.timesUsed || first.value.localeCompare(second.value) 
}

function teamNamesToDropdown(teamNames) {
    let teamNamesDropdown = "<select name='teamNames' id='teamNames'>\n"
    teamNamesDropdown += `<option value=""></option>`

    for (const teamName of teamNames) {
        let displayValue = `${teamName.displayValue}`
        if (teamName.timesUsed > 0) {
            displayValue = displayValue + ` (${teamName.timesUsed})`
        }
        teamNamesDropdown += `<option value=${teamName.value}>${displayValue}</option>`
    }

    teamNamesDropdown += "</select>"

    return teamNamesDropdown
}

function showTeamNamesDropdown() {
    let teamNamesDropdown = document.getElementById("teamNames")
    if (teamNamesDropdown) {
        teamNamesDropdown.remove()
    }
    cherwellTeamInput.parentNode.parentNode.insertAdjacentHTML("beforeend", teamNamesToDropdown(getSavedTeamNames()))

    teamNamesDropdown = document.getElementById("teamNames")
    teamNamesDropdown.addEventListener("change", teamNameChanged)
}

function teamNameChanged() {
    let teamNames = getSavedTeamNames()
    let teamNamesDropdown = document.getElementById("teamNames")
    let teamName = teamNamesDropdown.options[teamNamesDropdown.selectedIndex].text
    let selectedIndex = teamNames.findIndex(t => t.value == teamNamesDropdown.value)

    if (selectedIndex > -1) {
        teamNames[selectedIndex].timesUsed += 1
    }
    
    cherwellTeamInput.value = teamNames[selectedIndex].displayValue
    setSavedTeamNames(teamNames)
}

function isUnique(item, index, array) {
    return array.indexOf(item.value) === array.lastIndexOf(item.value);
}

function loadNewTeamNames() {
    const tableRows = document.querySelector(".grid-content-container").getElementsByTagName("tr");
    let teamNames = []
    Array.from(tableRows).forEach((row, index) => {
        const firstCell = row.children[0]; // Get the first <td> element in the row
        if (firstCell && index > 0) {
            const cellText = firstCell.textContent.replace("TeamInfo Table", "").trim();
            console.log("'" + cellText + "'")
            teamNames.push(cellText)
        }
    });
    setSavedTeamNames(teamNames)
}
