const React = require('react');
const {
    Pagination,
    NoHits,
    InitialLoader,
    Hits,
    LayoutBody,
    LayoutResults,
    SideBar,
    DynamicRangeFilter,
    InputFilter
} = require('searchkit');

const TopBar = require('./body/top_bar.jsx');
const CommentItem = require('./body/comment_item.jsx');

const noHitsTranslations = {
    "NoHits.NoResultsFound": 'По запросу "{query}" ничего не найдено :('
};

const rangeInputTranslations = {
    'range.submit': 'Применить'
};

const paginationTranslations = {
    "pagination.previous": "Назад",
    "pagination.next": "Вперёд"
};

const Body = () => {
    return (
        <LayoutBody>
            <SideBar>
                <InputFilter
                    id="author"
                    title="Фильтр по автору"
                    placeholder="ник на сайте"
                    searchOnChange={true}
                    queryFields={["author"]} />
            </SideBar>
            <LayoutResults>
                <TopBar/>
                <Hits hitsPerPage={30} itemComponent={CommentItem} scrollTo="body"/>
                <NoHits translations={noHitsTranslations}/>
                <InitialLoader/>
                <Pagination showNumbers={true} translations={paginationTranslations}/>
            </LayoutResults>
        </LayoutBody>
    );
};

module.exports = Body;
