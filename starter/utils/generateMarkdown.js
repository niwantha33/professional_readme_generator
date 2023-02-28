// function to generate markdown for README
function generateMarkdown(data) {

  const content = `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)


## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.features}

## How to Contribute
${data.contribute}

## Tests
${data.tests}



`;
  return content
}

module.exports = generateMarkdown;
