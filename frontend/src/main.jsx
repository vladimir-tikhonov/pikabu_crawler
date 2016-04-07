const React = require('react');
const ReactDOM = require('react-dom');
const mixpanel = require('mixpanel-browser');

const SearchPage = require('./scripts/SearchPage.jsx');

mixpanel.init(process.env.MIXPANEL_TOKEN);

ReactDOM.render(<SearchPage />, document.getElementById("main"));
