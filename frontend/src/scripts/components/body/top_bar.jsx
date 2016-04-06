const React = require('react');

const {
    HitsStats,
    ResetFilters,
    SelectedFilters,
    SortingSelector,
    ActionBar,
    ActionBarRow
} = require('searchkit');

const sortOptions = [
    {
        label: "По релевантности",
        field: "_score",
        order: "desc",
        defaultOption: true
    },
    {
        label: "Вначале с большим рейтингом",
        field: "rating",
        order: "desc"
    },
    {
        label: "Вначале с меньшим рейтингом",
        field: "rating",
        order: "asc"
    },
    {
        label: "Вначале новые",
        field: "date",
        order: "desc"
    },
    {
        label: "Вначале старые",
        field: "date",
        order: "asc"
    },
    {
        label: "Вначале к новым постам",
        field: "post_id",
        order: "desc"
    },
    {
        label: "Вначале к старым постам",
        field: "post_id",
        order: "asc"
    }
];

const resetAllTranslations = {
    "reset.clear_all": "Сбросить параметры поиска"
}

const TopBar = () => {
    return (
        <ActionBar>
            <ActionBarRow>
                <HitsStats translations={{
                    "hitstats.results_found": "найдено: {hitCount}"
                }}/>
                <SortingSelector options={sortOptions}/>
            </ActionBarRow>
            <ActionBarRow>
                <SelectedFilters/>
                <ResetFilters translations={resetAllTranslations} />
            </ActionBarRow>

        </ActionBar>
    );
};

module.exports = TopBar;
