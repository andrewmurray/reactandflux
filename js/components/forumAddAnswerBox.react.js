var ForumAddAnswerBox = React.createClass({
    render: function() {
        return (
            <div>
                <div className="form-group">
                    <textarea id="addAnswer" className="form-control"></textarea>
                </div>
                <input type="button" className="btn btn-primary pull-right" value="Add"/>
            </div>
        );
    }
});
