let TEAM_NAMES = "teamNames"; // The name of our custom dropdown
let TEXT_PROMPT = "textPrompt"; // the input box for cherwell team names
let teamNamesDropdown;
let cherwellTeamInput;
let loaded = false;
let defaultTeamNames = ['Windows Engineering', 'API Requests', 'Security', 'BA/PM', 'Asset Mgmt', 'Architects', 'Advance Support', '365 Configurations', '.Net Tier 2', '.Net App Dev', 'Unified Communications', 'UNIX Engineering', 'Dev Productivity Tools', 'Data Services ETL', 'Java Customer App Dev', 'Data Services API', 'Java Ops - NVA', 'Data Services Looker', 'SharePoint Engineering', 'Java Ops - Risk/Settlement', 'Data Management AWS', 'Data Management On Prem', 'Java Operational App Dev', 'Tier 1 Application', 'Java Ops - Vertex Tax', 'QA', 'Salesforce', 'Security Admin', 'Software Review', 'Talent Development', 'Telecom Engineering', 'Tier 1 Desktop', 'Prod Ops', 'Tier 1 Support', 'PeopleSoft Tier 2', 'PeopleSoft App Dev', 'Network Engineering', 'Level 2 Management', 'Knowledge Management', 'JIRA Admin', 'Java Tier 2', 'Java Sales App Dev', 'BPM', 'ECM', 'IT Managers', 'IT Review', 'ITSM', 'Java Ops - L&T']
 
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
 
var observer = new MutationObserver(function(mutations, observer) {
    teamNamesDropdown = document.getElementById(TEAM_NAMES)
    cherwellTeamInput = document.getElementById(TEXT_PROMPT)
    if (cherwellTeamInput && !loaded) {
        main()
        loaded = true;
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
 
    const savedTeamNames = getSavedTeamNames();
    savedTeamNames.push(cherwellTeamInput.value);
    setSavedTeamNames(savedTeamNames);
    showTeamNamesDropdown()
}
 
function getSavedTeamNames() {
    const savedTeamNames = JSON.parse(localStorage.getItem(TEAM_NAMES))
    if (savedTeamNames == null) {
        return defaultTeamNames;
    } else {
        return savedTeamNames;
    }
}
 
function setSavedTeamNames(savedTeamNames) {
    localStorage.setItem(TEAM_NAMES, JSON.stringify(savedTeamNames.filter(isUnique)))
}
 
function teamNamesToDropdown(teamNames) {
    let teamNamesDropdown = "<select name='teamNames' id='teamNames'>\n"
    teamNames.unshift("")
 
    for (const teamName of teamNames) {
        teamNamesDropdown += `<option value=${teamName}>${teamName}</option>`
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
    let teamNamesDropdown = document.getElementById("teamNames")
    cherwellTeamInput.value = teamNamesDropdown.options[teamNamesDropdown.selectedIndex].text
}
 
function isUnique(value, index, array) {
    return array.indexOf(value) === array.lastIndexOf(value);
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