const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html');

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {}
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value });
                return clean;
            }
        }
    }
});

const Joi = BaseJoi.extend(extension);

module.exports.contactSchema = Joi.object({
    contact: Joi.object({
        name: Joi.string().required().escapeHTML(),
        lastName: Joi.string().required().escapeHTML(),
        email: Joi.string().required().escapeHTML(),
        telephone: Joi.string().required().escapeHTML(),
    }).required(),
    _csrf: Joi.string().required().escapeHTML()
});