const React = require('react');
const { SearchBox, TopBar } = require('searchkit');

require('../../styles/components/header.scss')

const translations = {
    "searchbox.placeholder": "что хотите найти?"
};

const Header = () => {
    return (
        <TopBar>
            <div className="my-logo"><span>Поиск по комментариям pikabu.ru</span></div>
                <SearchBox
                    translations={translations}
                    autofocus={true}
                    searchOnChange={true}
                    queryFields={['content']}
                    searchThrottleTime={500} />
        </TopBar>
    );
};

module.exports = Header;
