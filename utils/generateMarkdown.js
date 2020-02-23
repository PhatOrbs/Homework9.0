function generateMarkdown(response, user) {
  return `
  \n
  ![badge](https://https://img.shields.io/badge/Generated%20By%3A-README.MD%20Generator-brightgreen)
  ![badge](https://https://img.shields.io/badge/build-passing-blueviolet)
  \n
  # ${response.project}\n
  ## Contributors:\n
  ![Profile Image](${user.avatar_url})\n
  ${user.name}\n
  * Github Username: :pizza: ${response.username}\n
  * Location: ${user.location}\n
  * Bio: ${user.bio}\n
  ## Description \n
  :cake: ${response.description}\n
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
  :bacon: ${response.usage} \n
  ## License \n
  :trophy: ${response.license} \n
  ## Credit \n
  ${response.credit} \n
  ## Contributing \n
  :scorpion: ${response.contributing} \n
  ## Tests \n
  ${response.tests} \n
  ## Questions \n
  ${response.questions} \n
  :key: :key: :key: :key: :key: \n
`;
}

module.exports = generateMarkdown;
