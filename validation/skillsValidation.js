const Joi = require('joi');
const validateSkills =(data) => {
  const skillsSchema = Joi.object({
    skills: Joi.string().required(),
    Description: Joi.string().required(),
    Rating: Joi.string(),
  })

  return skillsSchema.validate(data)
}
module.exports = validateSkills;