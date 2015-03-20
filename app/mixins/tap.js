var injectTapEventPlugin = require("react-tap-event-plugin");

module.exports = {
  componentWillMount: function() {
    injectTapEventPlugin();
  }
};