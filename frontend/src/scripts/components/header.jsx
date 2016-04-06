const React = require('react');
const { SearchBox, TopBar } = require('searchkit');

const logo = require('../../images/pikabu_logo.png');

require('../../styles/components/header.scss')

const translations = {
    "searchbox.placeholder": "что хотите найти?"
};

const Header = () => {
    return (
        <TopBar>
            <div className="my-logo">
                <div className="logo-container">
                    <img src={logo} />
                </div>
                <div className="text-container">
                    <span>Поиск по комментариям pikabu.ru</span>
                </div>
            </div>
            <SearchBox
                translations={translations}
                autofocus={true}
                queryFields={['content']} />
        </TopBar>
    );
};

module.exports = Header;
