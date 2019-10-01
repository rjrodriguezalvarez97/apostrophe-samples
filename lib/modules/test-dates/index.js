module.exports = {
  name: "test-date",
  extend: "apostrophe-pieces",
  label: "Test Date",
  pluralLabel: "Test Dates",
  addFields: [
    {
      name: "date1",
      label: "Date 1 with Pikaday Options",
      type: "date",
      required: true,
      pikadayOptions: {
        format: "DD/MM/YYYY",
        firstDay: 1
      }
    },
    {
      name: "date2",
      label: "Date 2 without Pikaday Options",
      type: "date",
      required: true
    }
  ]
};
