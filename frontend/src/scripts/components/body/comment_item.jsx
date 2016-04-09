const React = require('react');
const moment = require('moment');
require('moment/locale/ru');

require('../../../styles/components/body/comment_item.scss');

const CommentItem = (props) => {
    const result = props.result;
    const comment_id = result._id;
    const { author, content, rating, date, post_id } = result._source;
    const formattedDate = moment(date).locale('ru').fromNow();

    return (
        <div className="comment-item" key={result._id}>
            <div className="info">
                <span className="rating">{rating}</span>
                <a
                  className="author-link"
                  target="_blank"
                  href={'http://pikabu.ru/profile/' + author}>{author}</a>
                <span className="date">отправлено {formattedDate}</span>
                <a
                  className="comment-link"
                  target="_blank"
                  href={'http://pikabu.ru/story/' + '_' + post_id + '#comment_' + comment_id}>#</a>
            </div>
            <div className="content"><span>{content.split("\\\"").join("\"")}</span></div>
        </div>
    );
};

module.exports = CommentItem;
