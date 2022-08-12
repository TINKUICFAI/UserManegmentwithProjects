module.exports = (lang = "en") => {
  const user_added = {
    en: "Registered successfully",
  };

  const token_generated = {
    en: "Token generated successfully",
  };

  const user_details = {
    en: "User details",
  };

  const profile_complete = {
    en: "Profile completed successfully",
  };

  const profile_changed = {
    en: "Profile updated successfully",
  };

  const user_not_found = {
    en: "User record not found with given details!",
  };

  const incorrect_password = {
    en: "Entered password is incorrect!",
  };

  const incorrect_current_password = {
    en: "Entered current password is incorrect!",
  };

  const otp_sent = {
    en: "OTP sent on given mobile",
  };

  const otp_sent_on_mail = {
    en: "OTP sent on given email",
  };

  const incorrect_otp = {
    en: "Entered OTP is incorrect!",
  };

  const otp_not_verified = {
    en: "OTP is not verified!",
  };

  const otp_verified = {
    en: "OTP verified successfully!",
  };

  const mobile_updated = {
    en: "Mobile number changed successfully!",
  };

  const password_changed = {
    en: "Password updated successfully. Please login with new password!",
  };

  const maxLength = function (name) {
    return {
      en: `${name} exceeded the character limit!`,
    };
  };

  const required = function (name) {
    return {
      en: `${name} is required!`,
    };
  };

  const invalid_token = {
    en: "Invalid token!",
  };

  const ac_deactivated = {
    en: "Your account is deactivated by admin!",
  };

  const unauthorized = {
    en: "You do not have permission to make changes.",
  };

  const social_id_missing = {
    en: "social Provider id is missing!",
  };

  const mobile_exist = {
    en: "Entered mobile number already registered, Please change and try again!",
  };

  const email_exist = {
    en: "Email already registered, Please change and try again!",
  };

  const sub_category_added = {
    en: "Sub category added successfully!",
  };

  const Tasks_added = {
    en: "Tasks added successfully!",
  };

  const Tasks_list = {
    en: "Tasks list",
  };

  const sub_category_list = {
    en: "Sub category list",
  };

  const category_added = {
    en: "Category added successfully!",
  };

  const Project_list = {
    en: "Project list",
  };

  const category_details = {
    en: "Category details",
  };

  const sub_category_details = {
    en: "Sub-category details",
  };

  const category_deleted = {
    en: "Category deleted successfully!",
  };

  const sub_category_deleted = {
    en: "Sub category deleted successfully!",
  };

  // Question and answer

  const question_added = {
    en: "Question added successfully!",
  };

  const question_updated = {
    en: "Question updated successfully!",
  };

  const question_deleted = {
    en: "Question deleted successfully!",
  };

  const question_list = {
    en: "Question list",
  };

  const answer_added = {
    en: "Answer added successfully!",
  };

  const photo_saved = {
    en: "Photo saved successfully",
  };
  const photo_removed = {
    en: "Photo removed successfully",
  };

  const selfie_saved = {
    en: "selfie added successfully",
  };

  const query_saved = {
    en: "Query send successfully",
  };

  const query_list = {
    en: "Query list",
  };

  const users_list = {
    en: "Users list",
  };

  const status_changed = {
    en: "Status changed successfully",
  };

  const privacy_policy = {
    en: "Privacy policy",
  };
  const about_us = {
    en: "About us",
  };
  const term_of_service = {
    en: "Term of services",
  };

  const privacy_prefrences = {
    en: "Privacy prefrences",
  };

  const licenses = {
    en: "Licenses",
  };

  const setting = {
    en: "Data saved successfully",
  };

  const admin_not_found = {
    en: "Admin record not found with given details!",
  };

  const user_deleted = {
    en: "User deleted successfully",
  };

  const Tasks_deleted = {
    en: "Tasks deleted successfully!",
  };

  const Tasks_updated = {
    en: "Tasks updated successfully!",
  };

  const category_updated = {
    en: "Category updated successfully!",
  };

  const activity_added = {
    en: "Activity added successfully!",
  };

  const meetup_success = {
    en: "Meetup successfully!",
  };

  const unmatch_profile = {
    en: "Profile unmatched successfully!",
  };

  const like_added = {
    en: "Like added successfully!",
  };

  const like_updated = {
    en: "Like updated successfully!",
  };

  const matched_users = {
    en: "Matched user list",
  };

  const event_list = {
    en: "Event list",
  };

  const logout = {
    en: "Logout successfully",
  };

  const token_changed = {
    en: "Device token updated successfully!",
  };

  const notification_permission_changed = {
    en: "Notification permission updated successfully!",
  };

  const notification_list = {
    en: "Notification list",
  };
  const notification_count = {
    en: "Notification count",
  };

  const notification_updated = {
    en: "Notification updated successfully",
  };

  const taks_added = {
    en: "Task created successfully",
  };

  const notification_deleted = {
    en: "Notification deleted successfully",
  };

  const Tasks_details = {
    en: "Tasks details",
  };

  const project_not_found = {
    en: "Project not found!",
  };
  const user_activated = {
    en: "User activated successfully",
  };
  const user_deactivated = {
    en: "User deactivated successfully",
  };

  return {
    user_added: user_added[lang],
    profile_complete: profile_complete[lang],
    user_not_found: user_not_found[lang],
    incorrect_password: incorrect_password[lang],
    incorrect_current_password: incorrect_current_password[lang],
    otp_sent: otp_sent[lang],
    otp_sent_on_mail: otp_sent_on_mail[lang],
    incorrect_otp: incorrect_otp[lang],
    otp_verified: otp_verified[lang],
    password_changed: password_changed[lang],
    ac_deactivated: ac_deactivated[lang],
    invalid_token: invalid_token[lang],
    unauthorized: unauthorized[lang],
    social_id_missing: social_id_missing[lang],
    required,
    maxLength,
    mobile_exist: mobile_exist[lang],
    email_exist: email_exist[lang],
    Tasks_updated: Tasks_updated[lang],
    Tasks_added: Tasks_added[lang],
    Tasks_list: Tasks_list[lang],
    sub_category_list: sub_category_list[lang],
    taks_added: taks_added[lang],
    question_updated: question_updated[lang],
    question_deleted: question_deleted[lang],
    question_list: question_list[lang],
    answer_added: answer_added[lang],
    photo_saved: photo_saved[lang],
    photo_removed: photo_removed[lang],
    Tasks_details: Tasks_details[lang],
    mobile_updated: mobile_updated[lang],
    query_saved: query_saved[lang],
    query_list: query_list[lang],
    privacy_policy: privacy_policy[lang],
    about_us: about_us[lang],
    term_of_service: term_of_service[lang],
    privacy_prefrences: privacy_prefrences[lang],
    licenses: licenses[lang],
    setting: setting[lang],
    admin_not_found: admin_not_found[lang],
    users_list: users_list[lang],
    status_changed: status_changed[lang],
    user_deleted: user_deleted[lang],
    category_added: category_added[lang],
    Project_list: Project_list[lang],
    category_details: category_details[lang],
    sub_category_details: sub_category_details[lang],
    category_deleted: category_deleted[lang],
    sub_category_deleted: sub_category_deleted[lang],
    Tasks_deleted: Tasks_deleted[lang],
    Tasks_updated: Tasks_updated[lang],
    category_updated: category_updated[lang],
    // sub_category_updated: sub_category_updated[lang],
    activity_added: activity_added[lang],
    meetup_success: meetup_success[lang],
    unmatch_profile: unmatch_profile[lang],
    like_added: like_added[lang],
    like_updated: like_updated[lang],
    user_details: user_details[lang],
    profile_changed: profile_changed[lang],
    matched_users: matched_users[lang],
    event_list: event_list[lang],
    otp_not_verified: otp_not_verified[lang],
    logout: logout[lang],
    token_generated: token_generated[lang],
    token_changed: token_changed[lang],
    notification_list: notification_list[lang],
    notification_permission_changed: notification_permission_changed[lang],
    notification_updated: notification_updated[lang],
    notification_count: notification_count[lang],
    // notification_created: notification_created[lang],
    // notification_deleted: notification_deleted[lang],
    // notification_details: notification_details[lang],
    project_not_found: project_not_found[lang],
    user_activated: user_activated[lang],
    user_deactivated: user_deactivated[lang],
  };
};
