const React = require('react');

const CommentItem = (props) => {
    const result = props.result;
    const url = "http://www.imdb.com/title/" + result._source.imdbId

    return (
        <div className={props.bemBlocks.item().mix(props.bemBlocks.container("item"))} key={result._id}>
            <a href={url} target="_blank">
                <img className={props.bemBlocks.item("poster")} src={result._source.poster} width="100" height="140"/>
                <div className={props.bemBlocks.item("title")}>{result._source.title}</div>
            </a>
        </div>
    );
};

module.exports = CommentItem;
