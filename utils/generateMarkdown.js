function generateMarkdown(response, user) {
  return `
  \n
  # ${response.project}\n
  ## Contributors:\n
  ![Profile Image](${user.avatar_url})\n
  ${user.name}\n
  * Github Username: ${response.username}\n
  * Location: ${response.location}\n
  * Bio: ${user.bio}\n
  ## Description \n
  ${response.description}\n
  ## Table of Contents \n
  * [installation](#installation) \n
  * [Usage](#usage) \n
  * [Contributors](#contributors) \n
  * [License](#license) \n
  * [Tests](#tests) \n
  * [Questions](#questions) \n
  ## Installation \n
  ${response.installation} \n
  ## Usage \n
  ${response.usage} \n
  ## License \n
  ${response.license} \n
  ## Credit \n
  ${response.credit} \n
  ## Contributing \n
  ${response.contributing} \n
  ## Tests \n
  ${response.tests} \n
  ## Questions \n
  ${response.questions} \n
`;
}

module.exports = generateMarkdown;
