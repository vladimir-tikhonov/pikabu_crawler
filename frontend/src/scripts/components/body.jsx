const React = require('react');
const {
    Pagination,
    NoHits,
    InitialLoader,
    Hits,
    LayoutBody,
    LayoutResults,
    SideBar,
    DynamicRangeFilter
} = require('searchkit');

const TopBar = require('./body/top_bar.jsx');
const CommentItem = require('./body/comment_item.jsx');

const noHitsTranslations = {
    "NoHits.NoResultsFound": 'По запросу "{query}" ничего не найдено :('
};

const rangeInputTranslations = {
  'range.submit': 'Применить'
}

const Body = () => {
    return (
        <LayoutBody>
            <SideBar>
              <DynamicRangeFilter
                translations={rangeInputTranslations}
                field="rating"
                id="rating"
                title="Рейтинг комментария"/>
            </SideBar>
            <LayoutResults>
                <TopBar />
                <Hits
                    hitsPerPage={30}
                    highlightFields={['content']}
                    itemComponent={CommentItem}
                    scrollTo="body" />
                <NoHits translations={noHitsTranslations}/>
                <InitialLoader/>
                <Pagination showNumbers={true}/>
            </LayoutResults>
        </LayoutBody>
    );
};

module.exports = Body;
