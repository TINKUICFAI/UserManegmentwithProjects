const { Validator } = require('node-input-validator');
const { validate, validations } = require("./index")

module.exports = () => {
  const validateMobile = async (req, res, next) => {

      const v = new Validator(req.body, {
        countryCode: validations.general.requiredString,
        mobile: validations.user.mobile
      });

      validate(v, res, next, req);
  }

  const validateOtp = async (req, res, next) => {

      const v = new Validator(req.body, {
        countryCode: validations.general.requiredString,
        mobile: validations.user.existsmobile,
        code: validations.general.requiredInt
      });

      validate(v, res, next, req);
  }

  const validateEmailAndPassword = async (req, res, next) => {

      const v = new Validator(req.body, {
        email: validations.user.email,
        password: validations.general.requiredString
      });

      validate(v, res, next, req);
  }

  const validateCompleteProfile = async (req, res, next) => {

      const v = new Validator(req.body, {
        name: validations.general.requiredString,
        dob: validations.general.requiredString,
        gender: validations.general.requiredString
      });

      validate(v, res, next, req);
  }

  const validatePhotos = async (req, res, next) => {

      const v = new Validator(req.body, {
        file: validations.general.required
      });

      validate(v, res, next, req);
  }

  const validateSelfie = async (req, res, next) => {

      const v = new Validator(req.body, {
        selfie: validations.general.required
      });

      validate(v, res, next, req);
  }

  const validateEditProfile = async (req, res, next) => {

      const v = new Validator(req.body, {
        name: validations.general.requiredString,
        dob: validations.general.requiredString,
        gender: validations.general.requiredString,
        countryCode: validations.general.requiredString,
        mobile: validations.general.requiredString,
        email: validations.general.requiredString
      });

      validate(v, res, next, req);
  }

  const validateAddQuery = async (req, res, next) => {

      const v = new Validator(req.body, {
        subject: validations.general.requiredString,
        query: validations.general.requiredString
      });

      validate(v, res, next, req);
  }

  const validateAddUserDiscoverys = async (req, res, next) => {

      const v = new Validator(req.body, {
        distance: validations.general.required,
        age: validations.general.required,
        gender: validations.general.required
      });

      validate(v, res, next, req);
  }

  const validateMeetup = async (req, res, next) => {

      const v = new Validator(req.body, {
        partner: validations.user.user,
        activity_id: validations.user.activity,
        partner_activity_id: validations.user.activity
      });

      validate(v, res, next, req);
  }

  const validateMeetupId = async (req, res, next) => {

      const v = new Validator(req.body, {
        match_id: validations.general.required
      });

      validate(v, res, next, req);
  }

  const validateLike = async (req, res, next) => {

      const v = new Validator(req.body, {
        partnerId: validations.user.user,
        isLiked: validations.general.required,
        activity_id: validations.user.activity,
        partner_activity_id: validations.user.activity
      });

      validate(v, res, next, req);
  }

  const validateEvent = async (req, res, next) => {

      const v = new Validator(req.query, {
        type: validations.general.required
      });

      validate(v, res, next, req);
  }

  const validateDeviceToken = async (req, res, next) => {

      const v = new Validator(req.body, {
        device_token: validations.general.required,
        device_type: validations.general.requiredString
      });

      validate(v, res, next, req);
  }

  const validateAddReport = async (req, res, next) => {

      const v = new Validator(req.body, {
        reason: validations.general.required,
        reportedUserId: validations.user.user
      });

      validate(v, res, next, req);
  }

  const validateRemovePhoto = async (req, res, next) => {

      const v = new Validator(req.body, {
        image_id: validations.general.requiredString
      });

      validate(v, res, next, req);
  }

  return {
    validateMobile,
    validateOtp,
    validateEmailAndPassword,
    validateCompleteProfile,
    validateEditProfile,
    validatePhotos,
    validateSelfie,
    validateAddQuery,
    validateAddUserDiscoverys,
    validateMeetup,
    validateMeetupId,
    validateLike,
    validateEvent,
    validateDeviceToken,
    validateAddReport,
    validateRemovePhoto
  }
}
