const React = require('react');

const CommentItem = (props) => {
    const result = props.result;
    const { author, content } = result._source;
    const wrapperClass = props.bemBlocks.item().mix(props.bemBlocks.container("comment-item"));

    return (
        <div className={wrapperClass} key={result._id}>
          <span>{content} by {author}</span>
        </div>
    );
};

module.exports = CommentItem;
