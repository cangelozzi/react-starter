var React = require('react');
var ReactDOM = require('react-dom');

// React Component
var Person = function() {
    var name = 'Pink Floyd';
    var imageUrl = 'https://www.floydianslip.com/images/pink_floyd.jpg';
    var job = 'Prog Rock band';
    return (
        <div className="person">
            <div className="person-name">{name}</div>
            <img className="person-img" src={imageUrl} />
            <div className="person-job">
                {job}
            </div>
        </div>
    );
};

module.exports = Person;
