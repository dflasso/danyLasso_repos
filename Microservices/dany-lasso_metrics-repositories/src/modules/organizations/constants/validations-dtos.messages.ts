export default {
  FIELDS: {
    NAME: {
      IS_EMPTY: 'The name of organization is required',
      IS_NOT_STRING: 'The name of organization must be string',
      CONTAINT_ILLEGAL_CHARACTER: 'The name of organization can have letters',
    },
    STATUS: {
      IS_EMPTY: 'The status of organization is required',
      IS_NOT_NUMBER: 'The status of organization must be a positive number',
      IS_NOT_POSITIVE: 'The status of organization must be a positive number',
    },
  },
};
