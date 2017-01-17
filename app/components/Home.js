var React = require('react');
var ReactRouter = require('react-router');
var transparentBg = require('../styles').transparentBg;
var Link = ReactRouter.Link;
var Home = React.createClass({
  render: function () {
    return (
      <div className="jumbotron text-center" style={transparentBg}>
            <h1>Github Battle</h1>
            <p className="lead">my motto is coming soon</p>

            <Link to="/playerOne">
                <button type="button" className="btn btn-lg btn-success">Get Started</button>
            </Link>
      </div>
    )
  }
});

module.exports = Home;
