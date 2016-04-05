const React = require('react');
const { SearchkitProvider, SearchkitManager, Layout } = require('searchkit');

const Header = require('./components/header.jsx');
const Body = require('./components/body.jsx');

require('searchkit/theming/theme.scss');

const host = "http://164.132.110.157:9200"
const sk = new SearchkitManager(host, {});

class App extends React.Component {
    render() {
        return (
            <SearchkitProvider searchkit={sk}>
                <Layout size="l">
                    <Header />
                    <Body />
                </Layout>
            </SearchkitProvider>
        );
    }
}

module.exports = App;
