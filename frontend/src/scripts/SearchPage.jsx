const React = require('react');
const { SearchkitProvider, SearchkitManager, Layout } = require('searchkit');
const mixpanel = require('mixpanel-browser');

const Header = require('./components/header.jsx');
const Body = require('./components/body.jsx');

require('searchkit/theming/theme.scss');

const searchkitManager = new SearchkitManager(process.env.ES_HOST, {});

searchkitManager.setQueryProcessor((queryObject) => {
    const { q, author, sort, p } = searchkitManager.state;

    if (q || author) {
        mixpanel.track('Search', {
            query: q,
            author: author,
            sort: sort,
            page: p
        });
    }

    return queryObject;
});

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
