const React = require('react');
const { SearchkitProvider, SearchkitManager, Layout } = require('searchkit');

const Header = require('./components/header.jsx');
const Body = require('./components/body.jsx');

require('searchkit/theming/theme.scss');

const searchkitManager = new SearchkitManager(process.env.ES_HOST, {});

class App extends React.Component {
    render() {
        return (
            <SearchkitProvider searchkit={searchkitManager}>
                <Layout size="l">
                    <Header />
                    <Body />
                </Layout>
            </SearchkitProvider>
        );
    }
}

module.exports = App;
