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
[${data.credits.split(',')[0]}](${data.credits.split(',')[1]})

## License
This project is licensed under the ${data.license} license.

## Features
${data.features}

## How to Contribute
${data.contribute}

## Tests
${data.tests}


## Questions
If you have any questions or feedback, please don't hesitate to reach out to me at ${data.email}.You can also find me on GitHub as @${data.username}.

`;
  return content
}

module.exports = generateMarkdown;
