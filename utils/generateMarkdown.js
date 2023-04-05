// This function returns a license badge based on which license is passed in
// If there is no license, this returns an empty string
function renderLicenseBadge(selectedLicense) {
  if (selectedLicense === "none" || typeof selectedLicense === "undefined") {
    return "";
  } else {
    return `![${selectedLicense}](https://img.shields.io/badge/LICENSE-${selectedLicense}-red)`;
  }
}

// This function returns the license link
// If there is no license, this returns an empty string
function renderLicenseLink(selectedLicense) {
  if (selectedLicense === "none" || typeof selectedLicense === "undefined") {
    return "";
  } else {
    return `- [License](#license)`;
  }
}

// This function returns the license section of README
// If there is no license, this return an empty string
function renderLicenseSection(selectedLicense) {
  if (selectedLicense === "none" || typeof selectedLicense === "undefined") {
    return "";
  } else {
    return `## License 
    
This project is licensed under the ${selectedLicense} license.
    
    `;
  }
}

//This is the function to create the Markdown
function generateMarkdown(data) {
  let markdown = `# ${data.title}
## Description
${data.description}
## Table of Contents
- [Title](#title)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions](#questions)`;
  //The table of contents is navgational to the relevant sections

  // This creates the license section, link and badge
  if (
    data.selectedLicense !== "none" &&
    typeof data.selectedLicense !== "undefined"
  ) {
    markdown += `
   
## License
This project is licensed under the ${data.selectedLicense} license.
${renderLicenseBadge(data.selectedLicense)}
`;
  }

  markdown += `
## Installation
${data.installation}
## Usage
${data.usage}
## Tests
${data.tests}
## Contributing
${data.contribute}
## Questions
Username: ${data.gitUsername},
You can send me any questions via email: ${data.email}`;

  return markdown;
}

module.exports = generateMarkdown;
